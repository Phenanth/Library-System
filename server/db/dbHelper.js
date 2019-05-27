'use strict'

const Express = require('express');
const router = Express.Router();
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js');
const checkToken = require('../middleware/checkToken.js');

var crypto = require('crypto');

var speakeasy = require('speakeasy')
var QRCode = require('qrcode')

var salt = "abcdefghijklmnopqrstuvwxyz";
var txt = "123456";

const Login = (req, res) => {

	var md5 = crypto.createHash('md5');

	let validTime = '10s';
	let queryString = {
		sql: 'SELECT user_password AS solution FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};

	if (req.body.willStore) {
		validTime = '168h';
	}
	
	// console.log(req.body);
	// md5.update(req.body.password);

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error);
		}
		
		if (results) {
			// 防止code: 'ER_NOT_SUPPORTED_AUTH_MODE'类型错误
			if (!results[0]) {
				// 用户不存在
				console.log('Operation: Login, State: 404, Message: User not existed.');
				res.json({
					info: 404,
					success: false,
					message: 'User not exists.'
				});
			} else {
				// 如果有匹配的用户
				md5.update(req.body.password + salt);
				if (md5.digest('hex') == results[0].solution) {
					// 密码正确
					console.log('Operation: Login, State: 200');
					res.json({
						info: 200,
						success: true,
						path: '/userinfo',
						token: createToken(req.body.username, validTime)
					});	
				} else {
					// 密码错误
					console.log('Operation: Login, State: 304, Message: Wrong password.');
					res.json({
						info: 304,
						success: false,
						message: 'Wrong password.'
					});
				}
			}
		} else {
			console.log('Operation: Login, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	});

};

const GetUserData = (req, res) => {

	// console.log(req.body)
	let queryString = {
		sql: 'SELECT * FROM user CROSS JOIN Identification WHERE user.user_identity=Identification.User_identity AND user_id=?',
		values: [req.body.username],
		timeout: 40000
	};

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error)
		}

		if (results) {
			if (!results[0]) {
				console.log('Operation: Get User Data, State: 404, Message: User not existed.');
				res.json({
					info: 404,
					success: false,
					message: 'User not exists.'
				});
			} else {
				console.log('Operation: Get User Data, State: 200');
				res.json({
					info: 200,
					success: true,
					user_name: results[0].User_Name,
					user_id: results[0].User_ID,
					user_identity: results[0].Identify_Name,
					max_borrow_num: results[0].Max_Borrow_Num,
					max_borrow_time: results[0].Max_Borrow_Time,
				});
			}
		} else {
			console.log('Operation: Get User Data, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	});

};

const ChangePassword = (req, res) => {

	// console.log(req.body)

	var md5 = crypto.createHash('md5');

	let queryString_request = {
		sql: 'SELECT user_password AS solution FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};


	db.query(queryString_request, function(error, results, fields) {

		if (error) {
			console.log(error)
		}

		if (results) {
			if (!results[0]) {
				// 用户不存在
				console.log('Operation: Change Password, State: 404, Message: User not exists.');
				res.json({
					info: 404,
					success: false,
					message: 'User not exists.'
				});
			} else {
				md5.update(req.body.oldPassword + salt);
				// console.log(results[0])
				if (md5.digest('hex') == results[0].solution) {
					// 旧密码正确
					md5 = crypto.createHash('md5')
					md5.update(req.body.newPassword + salt);
					let queryString_update = {
						sql: 'UPDATE user SET user_password=? WHERE user_id=?',
						values: [md5.digest('hex'), req.body.username],
						timeout: 40000
					};

					db.query(queryString_update, function(error, results, fields) {
						if (error) {
							console.log(error)
						}
						if (results) {
							console.log('Operation: Change Password, State: 200');
							res.json({
								info: 200,
								success: true
							});
						} else {
							// 查询失败
							console.log('Operation: Change Password, State: 504, Message: Unknown DB Fault.');
							res.json({
								info: 504,
								success: false,
								message: 'Unknown DB Fault.'
							});
						}
					});
				} else {
					// 旧密码错误
					console.log('Operation: Change Password, State: 304, Message: Wrong Password.');
					res.json({
						info: 304,
						success: false,
						message: 'Wrong Password.'
					});
				}
			}
		} else {
			// 查询失败
			console.log('Operation: Change Password, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	})
}

const SendVerify = (req, res) => {
	var secret = speakeasy.generateSecret({length: 20});
	let queryString = {

	}
}

module.exports = (router) => {

	router.post('/login', Login);

	router.post('/getUserData', GetUserData);

	router.post('/changePassword', ChangePassword);

}
