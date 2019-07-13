const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', message => {
if (message.content.indexOf(prefix) !== 0) return;
	
var sender = message.author
let args = message.content.slice(prefix.length).split(/ +/);
let channel = client.channels.get("599542199998349312")
const command = args.shift().toLowerCase();
	
if (command === 'request') {
	if (message.channel.type == "dm") {
		let username = args[0]
		let owner = message.author
		message.channel.send(`Sent request for account ${username}.`)
		
		channel.send(`User ${owner} sent a whitelist request for username '${username}'.`)
		.then(function (message) {
			message.react('✅')
			message.react('❌')
		})
	}
}
  
});

client.login(process.env.BOT_TOKEN);
