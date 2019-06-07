'use strict'

const mysql = require('mysql');
const log4js = require('log4js');
const logger = require('../middleware/logger');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'swLibraryAdmin',
	password: '000000',
	database: 'sw_arch_library'
});

logger.info('Database connected.');

module.exports = connection;
