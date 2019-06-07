'use strict'

const jwt = require('jsonwebtoken');
const log4js = require('log4js');
const logger = require('./logger');

module.exports = function (req, res, next) {
	if (req.headers['authorization']) {
		let token = req.headers['authorization'].split(' ')[1];
		let decoded = jwt.decode(token, 'secret');

		if (!token) {
			logger.error.error('Operation: Check Token, State: 404, Message: User not loged in.');
			return res.json({
				info: 404,
				success: false,
				message: 'User not loged in.'
			});
		} else {
			if (decoded.exp <= Date.now() / 1000) {
				logger.error.error('Operation: Check Token, State: 304, Message: Token out of date.');
			} else {
				logger.info('Operation: Check Token, State: 200');
			}
		}
	}
	next();
}
