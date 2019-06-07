'use strict'

const Express = require('express');
const BodyParser = require('body-parser');
const routes = require('./routes.js');
const db = require('./db/connect.js');
const memcached = require('./middleware/memcached.js');
const mq = require('./middleware/RabbitMQ/receiver.js');
const log4js = require('log4js');
const logger = require('./middleware/logger');
const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/api', routes);

app.use(function (req, res, next) {
	var err = new Error('Page Not Found.');
	err.status = 404;
	next(err);
});

app.listen(3000, function () {
	logger.info('Server running at port 3000...');
});

/*// Keep the db connection alive.
setInterval(function () {
	db.query('SELECT 1');
}, 30000);*/

module.exports = app;
