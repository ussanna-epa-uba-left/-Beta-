/* Copyright (C) 2021 CyberQueen.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

CyberQueenWa - Yusuf Usta
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('cyber-queen-web-api');
const fs = require('fs');

async function CyberQueenWa() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [3, 2455, 11]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Cyber')}${chalk.blue.bold('Queen')}
${chalk.white.italic('Cyber Queen WhatsApp BOT By NICO')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('Cyber Queen QR Code: '),
			'CyberQueen;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'CyberQueen;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ meka katavath denna epa ' + conn.user.name + '* ⚠️',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"me code eka oyage number ekata avith ati!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

CyberQueenWa();
