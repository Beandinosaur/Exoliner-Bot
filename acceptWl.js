const Discord = require('discord.js');

async function acceptWl(whitelister, user) {
  acceptWlChannel.send(`Whitelist request from **${username}** has been accepted.`);
				newMessage.delete()
				
				var embed = new Discord.RichEmbed();
				embed
					.setColor("#0080FF")
					.setAuthor(`Whitelist Request`)
					.addField(`User Whitelisted:`, `${whitelister}`)
					.addField(`Accepted by:`, `${user}`)
				
				WlLogs.send(embed)
}

module.exports = acceptWl;
