const redis = require("redis");
const MAX_EXPIRE_TIME = 7 * 24 * 60 * 60;// 最大过期时间
const options = {
    'host': '127.0.0.1',
    'port': '6379',
    'ttl':  MAX_EXPIRE_TIME   //session的有效期为7天
};
const client = redis.createClient(options); 
dummy: function dummy(error, ok) {}
/*
   将token的json字符串放入redis
   json包含:username, token, auth
   set用法较为重要
*/
module.exports = {
	
	init: function ctor(server, opt) {
		console.log('Redis is initialized.');
	},
	exists: function  ifInRedis(key,callback)
	{
		if (!callback) {
			callback = dummy;				
		}
		return client.exists(key,callback);
	},

	set: function addToRedis(key, val,callback) {
		if (!callback) {
			callback = dummy;				
		}
		client.set(key, val);    
	},

	get: function getFromRedis(key,callback) {
		if (!callback) {
			callback = dummy;				
		}
	    return client.get(key,callback);
	},

	getMulti: function getMultiFromRedis(keys,callback) {
		if (!callback) {
			callback = dummy
		}
		return client.mget(keys, callback)
	},

	replace: function replaceFromRedis(key, val,callback) {
		if (!callback) {
			callback = dummy;
		}
		client.set(key, val, callback)
	}

}
