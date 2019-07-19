const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
	if (message.channel.type != "dm") return message.channel.send("This command only works in DMs.");
	if (!args[0]) return message.channel.send('You did not specify a user to request a whitelist for.');
	
	message.channel.send("hi")
}

module.exports.help = {
	name: "request"
}