'use strict'

const mysql = require('mysql');
const log4js = require('log4js');
const logger = require('../middleware/logger');

const connection = mysql.createConnection({
	// host: 'localhost',
	host: '10.0.75.1',
	// user: 'swLibraryAdmin',
	user: 'swLibraryAdminRe',
	password: '000000',
	// password: '',
	database: 'sw_arch_library'
});

logger.info('Database connected.');

module.exports = connection;
