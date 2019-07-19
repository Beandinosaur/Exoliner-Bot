const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const acceptWl = require('./acceptWl.js');
const denyWl = require('./denyWl.js');
const wlUser = require('./wlUser.js');
const prefix = '!';

client.commands = new Discord.Collection();

fs.readdir(".commands/", (err, files) = {
	if(err) console.error(err);
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0) {
		console.log("No commands loaded?");
		return;
	}
	
	console.log(`Loading ${jsfiles.length} commands.`);
	
	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		client.commands.set(props.help.name, props);
	});
});

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', message => {
	if (message.content.indexOf(prefix) !== 0) return;
	var sender = message.author
	
	let messageArray = message.content.split(/\s+/g);
	let command = messageArray[0];
	let args = messageArray.slice(1);
	
	let cmd = bot.commands.get(command.slice(prefix.length));
	if(cmd) cmd.run(client, message, args);
	
});
client.login(process.env.BOT_TOKEN);
