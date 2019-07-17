const Discord = require('discord.js');
const client = new Discord.Client();
const acceptWlChannel = client.channels.get("599542199998349312")
const WlLogs = client.channels.get("599583754587078676")

async function acceptWl(whitelister, user) {

	acceptWlChannel.send(`Whitelist request from **${user}** has been accepted.`);
				
	var embed = new Discord.RichEmbed();
	embed
		.setColor("#0080FF")
		.setAuthor(`Whitelist Request`)
		.addField(`User Whitelisted:`, `${whitelister}`)
		.addField(`Accepted by:`, `${user}`)
	
	WlLogs.send(embed)
}

module.exports = acceptWl;
