const amqp = require('amqplib')

const queue = "swLibrary"

async function sendMessage (message) {

	let msg = message.toString();

	const mqConnection = await amqp.connect("amqp://localhost");
	const channel = await mqConnection.createChannel();

	await channel.assertQueue(queue);
	// 改掉了保存数据的设置，因为会警告
	await channel.sendToQueue(queue, Buffer.from(msg));

	// 要保存数据到磁盘的话，取消注释以下代码：
	/*await channel.sendToQueue(queue, new Buffer(msg), {
        // RabbitMQ重启时，消息会被保存到磁盘
        persistent: true
    });*/

    // 关闭发送进程
	setTimeout(function () {
		mqConnection.close();
		// 这一句执行了之后进程会直接结束
		// process.exit(0);
	}, 500);

}

module.exports = sendMessage;