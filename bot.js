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
	}
}
	
if (command == 'whitelist') {
	if (!message.member.permissions.has('ADMINISTRATOR')) return;
	if (!args[0]) return message.channel.send('who are you trying to whitelist noob')
	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!member) return message.channel.send('who are you trying to whitelist noob');
	let role = message.guild.roles.find('name', 'Whitelisted');
	if (!role) return message.channel.send('could not find the whitelisted role ahhhh');
	
	if(message.member.roles.find("name", "Whitelisted")) {
		return message.channel.send('that user is already whitelisted are u high')
	}
	member.addRole(role.id);
	message.channel.send(`***${member.user.tag} was successfully whitelisted***`);
}
  
});

client.login(process.env.BOT_TOKEN);
