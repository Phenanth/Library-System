'use strict'

const Express = require('express');
const router = Express.Router();
const dbHelper = require('./db/dbHelper.js');
const testHelper = require('./testRoute.js');

dbHelper(router);
testHelper(router);

module.exports = router;
