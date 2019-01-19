const Discord = require('discord.js');
const client = new Discord.Client();
let prefix = "!";

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
  
});

client.login(process.env.BOT_TOKEN);
