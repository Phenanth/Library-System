const amqp = require("amqplib")

const queue = "swLibrary"

async function receiveMessage() {
	const mqConnection = await amqp.connect("amqp://localhost");
	const channel = await mqConnection.createChannel();
	await channel.assertQueue(queue);
	await channel.consume(queue, function (message) {
		// 接收者接收消息 message, 并在此回调函数中做出对消息的处理
		// 默认是打印接收到的消息
		// 可以将日志系统的处理加到这里
		console.log(message.content.toString());
		channel.ask(message);
	});
}

function initMqReceiver() {
	receiveMessage();
}

module.exports  = initMqReceiver;
