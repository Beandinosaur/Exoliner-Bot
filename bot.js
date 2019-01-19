const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', msg => {
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "buy")) {
    message.channel.send("test");
  } else
  if (message.content.startsWith(prefix + "purchase")) {
    message.channel.send("bar!");
  }
  
});

client.login(process.env.BOT_TOKEN);
