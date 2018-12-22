'use strict'

const Express = require('express');
const router = Express.Router();
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js');
const checkToken = require('../middleware/checkToken.js');

const Login = (req, res) => {

	let validTime = '10s';
	let queryString = {
		sql: 'SELECT user_password AS solution FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};

	if (req.body.willStore) {
		validTime = '168h';
	}
	
	console.log(req.body);

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
				if (req.body.password == results[0].solution) {
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

module.exports = (router) => {

	router.post('/login', Login);

}
