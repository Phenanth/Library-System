const amqp = require("amqplib")
const log4js = require('log4js');
const logger = require('../logger');

const queue = "swLibrary"

async function receiveMessage() {

	const mqConnection = await amqp.connect("amqp://localhost");
	const channel = await mqConnection.createChannel();

	await channel.assertQueue(queue);
	await channel.consume(queue, function (message) {
		// 接收者接收消息 message, 并在此回调函数中做出对消息的处理
		// 默认是在收到的消息前加上一个前缀代表这是通过MQ收到的消息，并打印此消息
		// 可以将日志系统的处理加到这里
		logger.info('[MQ RECEIVED] ' + message.content.toString());
		// console.log('[MQ RECEIVED] ' + message.content.toString());
		channel.ack(message);
	});
	
}

receiveMessage();
logger.info('MQ started.');

module.exports  = receiveMessage;
