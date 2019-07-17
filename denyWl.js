const Discord = require('discord.js');
const client = new Discord.Client();

async function denyWl(whitelister, user) {
  
  let acceptWlChannel = client.channels.get("599542199998349312")
  let WlLogs = client.channels.get("599583754587078676")
  
  acceptWlChannel.send(`Whitelist request from **${user}** has been denied.`);
}

module.exports = denyWl;
