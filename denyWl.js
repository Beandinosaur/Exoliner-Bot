const Discord = require('discord.js');

async function acceptWl(whitelister, user) {
  acceptWlChannel.send(`Whitelist request from **${user}** has been denied.`);
  newMessage.delete()
}

module.exports = denyWl;
