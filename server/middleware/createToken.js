'use strict'

var jwt = require('jsonwebtoken');

module.exports = function (name, validTime) {
	const token = jwt.sign({
		name: name
	}, 'secret', { expiresIn: validTime });

	return token;
}
