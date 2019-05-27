'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'swLibraryAdmin',
	password: '000000',
	database: 'sw_arch_library'
});

console.log('Database connected.');

module.exports = connection;
