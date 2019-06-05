const amqp = require('amqplib')

const queue = "swLibrary"

async function sendMessage (message) {
	const mqConnection = await amqp.connect("amqp://localhost");
	const channel = await mqConnection.createChannel();
	await channel.assertQueue(queue);
	await channel.sendQueue(queue, new Buffer(message), {
		// RabbitMQ 重启时，消息会被保存到磁盘
		persistent: true
	});
}

module.exports = sendMessage;