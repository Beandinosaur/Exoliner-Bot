const Discord = module.require("discord.js");
const blUser = module.require("../blUser.js")

module.exports.run = async (client, message, args) => {
	if (message.channel.type == "dm") return message.channel.send("This command does not work in DMs.");
	if(message.author.bot) return;
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permissions to use this command.");
	
	if (!args[0]) {
		return message.channel.send('You did not specify a user to blacklist.')
	}

	let requestedUser = args[0]
	message.channel.send(`Successfully blacklisted user **${requestedUser}**.`);
	blUser(message.author, requestedUser, client, message)
}

module.exports.help = {
	name: "blacklist"
}
