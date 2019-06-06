const Express = require('express');
const router = Express.Router();

const mqSender = require('./middleware/RabbitMQ/sender.js');

/*

测试路由，用来调用模块并测试模块是否正常运行。
正常情况下不会将前端用到的服务写在这里。

!! 请求的调用请用POST Man或者浏览器访问http://localhost:3000/下的对应路由。

*/

const sendMsgToMq = (req, res) => {

	// console.log(req);

	// 取出消息
	mqSender(req.query["req.body.msg"]);
	res.json({
		info: 200,
		success: true
	});

}

module.exports = (router) => {

	router.post('/sendMessageToMQ', sendMsgToMq);

}