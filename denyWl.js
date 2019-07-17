const Discord = require('discord.js');

async function denyWl(whitelister, user) {
  acceptWlChannel.send(`Whitelist request from **${user}** has been denied.`);
}

module.exports = denyWl;
