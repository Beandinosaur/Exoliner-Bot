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
const command = args.shift().toLowerCase();
	
if (command === 'buy') {
	message.channel.send(`your mom gay lol`)
}
	
if (command == 'whitelist') {
	if (!message.member.permissions.has('ADMINISTRATOR')) return;
	if (!args[0]) return message.channel.send('who are you trying to whitelist noob')
	let member = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	if (!member) return message.channel.send('who are you trying to whitelist noob');
	let role = message.guild.roles.find('name', 'Whitelisted');
	if (!role) return message.channel.send('could not find the whitelisted role ahhhh');
	
	member.addRole(role.id);
	message.channel.send(`***${member.user.tag} was successfully whitelisted***`);
}
  
});

client.login(process.env.BOT_TOKEN);
