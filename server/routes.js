'use strict'

const Express = require('express');
const router = Express.Router();
const dbHelper = require('./db/dbHelper.js');

dbHelper(router);

module.exports = router;
