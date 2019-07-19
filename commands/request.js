const Discord = module.require("discord.js");
const acceptWl = module.require("././acceptWl.js")
const denyWl = module.require("././denyWl.js")

module.exports.run = async (client, message, args) => {
	if (message.channel.type != "dm") return message.channel.send("This command only works in DMs.");
	if (!args[0]) return message.channel.send('You did not specify a user to request a whitelist for.');
	
	let requestedUser = args[0]
	let owner = message.author.tag
	const acceptWlChannel = client.channels.get('599542199998349312')
	
		
	message.channel.send(`Sent whitelist request for account **${requestedUser}**.`)
	
	acceptWlChannel.send(`User **${owner}** sent a whitelist request for username **${requestedUser}**.`)
		.then(newMessage => {
		newMessage.react('✅')
		newMessage.react('❌')
	
		const filter = (reaction, user) => {
			return reaction.emoji.name === '✅' && user.id !== client.user.id ||
				reaction.emoji.name === '❌' && user.id !== client.user.id;
		}
			
		let emojiPause = new Discord.ReactionCollector(newMessage, filter, {
			time: 600000
		})
		
		emojiPause.on('collect', (reaction, reactionCollector) => {
			if (reaction.emoji.name === '✅') {
				let reactorUsername = reaction.users.filter(user => user.id !== client.user.id).array()[0].username;
				acceptWl(reactorUsername, requestedUser, owner, client)
				newMessage.delete()
				message.channel.send(`Your whitelist request has been accepted by **${reactorUsername}**.`)
			} else if (reaction.emoji.name === '❌') {
				let reactorUsername = reaction.users.filter(user => user.id !== client.user.id).array()[0].username;
				denyWl(reactorUsername, requestedUser, owner, client)
				newMessage.delete()
				message.channel.send(`Your whitelist request has been denied by **${reactorUsername}**.`)
			}
		})
	});
}

module.exports.help = {
	name: "request"
}