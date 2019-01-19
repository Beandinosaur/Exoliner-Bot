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
  
});

client.login(process.env.BOT_TOKEN);
