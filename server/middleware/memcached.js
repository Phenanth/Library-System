const Memcached = require('memcached');
const memcached = new Memcached('localhost:11211', { debug: true });
const log4js = require('log4js');
const logger = require('./logger');

// 最大过期时间
const MAX_EXPIRE_TIME = 7 * 24 * 60 * 60;

// 影响set语句，不能不写
dummy: function dummy(error, ok) { }

/*
memcached 示例模块
对memcached的调用进行优化。

---

以下是主要用到本模块的场景，并非本模块功能的说明。
储存指定用户号最后活跃（登录）的时间
用户不存在则插入一条代表该用户的记录

记录格式如下
user_id: 		用户id
login_time: 	最近登录时间
*/

logger.info('Memcached connected.')

module.exports = {
	
	init: function ctor(server, opt) {
		logger.info('Memcached is initialized.');
	},

	set: function addToCache(key, val, expire, callback) {
		if (!expire) {
			expire = MAX_EXPIRE_TIME; // 秒，这里的过期时间设置为一周
		}
		if (!callback) {
			callback = dummy;				
		}
		memcached.set(key, val, expire, callback);
	},

	get: function getFromCache(key, callback) {
		if (!callback) {
			callback = dummy
		}
		return memcached.get(key, callback)
	},

	getMulti: function getMultiFromCache(keys, callback) {
		if (!callback) {
			callback = dummy
		}
		return memcached.getMulti(keys, callback)
	},

	replace: function replaceFromCache(key, val, expire, callback) {
		if (!expire) {
			expire = MAX_EXPIRE_TIME;
		}
		if (!callback) {
			callback = dummy;
		}
		memcached.replace(key, val, expire, callback)
	}

}