const Discord = require('discord.js');

async function acceptWl(whitelister, user, client) {
	
	let acceptWlChannel = client.channels.get("599542199998349312")
	let WlLogs = client.channels.get("599583754587078676")

	acceptWlChannel.send(`Whitelist request from **${user}** has been accepted.`)
	.then(message => {
		message.delete(5000)
	});
	       
	const Embed = new Discord.RichEmbed();
	Embed
		.setColor("#0080FF")
		.setAuthor("Whitelist Request")
		.addField("User Whitelisted:", `${whitelister}`)
		.addField("Accepted by:", `${user}`);
	
	WlLogs.send({Embed});
}

module.exports = acceptWl;
