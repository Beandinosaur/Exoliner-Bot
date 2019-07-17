const Discord = require('discord.js');
const client = new Discord.Client();

async function acceptWl(whitelister, user, client) {
	
	let acceptWlChannel = client.channels.get("599542199998349312")
	let WlLogs = client.channels.get("599583754587078676")

	acceptWlChannel.send(`Whitelist request from **${user}** has been accepted.`);
				
	let embed = new Discord.RichEmbed();
	embed
		.setColor("#0080FF")
		.setAuthor(`Whitelist Request`)
		.addField(`User Whitelisted:`, `${whitelister}`)
		.addField(`Accepted by:`, `${user}`)
	
	WlLogs.send(embed)
}

module.exports = acceptWl;
