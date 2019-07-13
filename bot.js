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
let acceptWlChannel = client.channels.get("599542199998349312")
const command = args.shift().toLowerCase();
	
if (command === 'request') {
	if (message.channel.type == "dm") {
		let username = args[0]
		let owner = message.author
		
		if (!args[0]) {
			return message.channel.send('You did not specify a user to request a whitelist for.')
		}
		
		message.channel.send(`Sent whitelist request for account ${username}.`)
		
		acceptWlChannel.send(`User ${owner} sent a whitelist request for username '${username}'.`)
		.then(function (message) {
			message.react('✅')
			message.react('❌')
		})
	}
}

if (command == 'whitelist') {
	if (message.channel.type == "dm") return message.channel.send("This command does not work in DMs.");
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permissions to use this command.");
	
	if (!args[0]) {
		return message.channel.send('You did not specify a user to whitelist.')
	}

	let username = args[0]
	message.channel.send(`Successfully whitelisted user '${username}'`);
}

});

client.login(process.env.BOT_TOKEN);
