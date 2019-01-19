const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "buy")) {
    message.channel.send("test");
  }
  
});

client.login(process.env.BOT_TOKEN);
