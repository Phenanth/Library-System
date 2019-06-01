// 测试用，用于理解nodejs的memcached库

var memcached = require('./memcached.js')
// const Memcached = require('memcached');
// const memcached = new Memcached('localhost:11211', { debug: true });


memcached.set('name1', 'abc')
memcached.set('name2', 'def')
memcached.set('name3', 'ghi')
memcached.getMulti(['name1', 'name2', 'name3'], function(errCache, result) {

	if (errCache) {
		// console.log(errCache)
	} else {
		console.log(result)
	}
})

memcached.replace('name1', 'jkl')
memcached.getMulti(['2015210405002', 'name2', 'name3'], function(errCache, result) {

	if (errCache) {
		// console.log(errCache)
	} else {
		console.log(result)
	}
})
