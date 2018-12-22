'use strict'

const mysql = require('mysql');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'libraryAdmin',
	password: '000000',
	database: 'library'
});

console.log('Database connected.');

module.exports = connection;
