const Discord = require('discord.js');
const client = new Discord.Client();
const acceptWl = require('./acceptWl.js');
const denyWl = require('./denyWl.js');
const wlUser = require('./wlUser.js');
const prefix = '!';

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', message => {
	
if (message.content.indexOf(prefix) !== 0) return;

var sender = message.author

let args = message.content.slice(prefix.length).split(/ +/);
let acceptWlChannel = client.channels.get("599542199998349312")
let WlLogs = client.channels.get("599583754587078676")
const command = args.shift().toLowerCase();
	
if (command === 'request') {
	if (message.channel.type != "dm") return message.channel.send("This command only works in DMs.");
	if (!args[0]) return message.channel.send('You did not specify a user to request a whitelist for.');
	
	let requestedUser = args[0]
	let owner = message.author.tag
		
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

if (command == 'whitelist') {
	if (message.channel.type == "dm") return message.channel.send("This command does not work in DMs.");
	if(message.author.bot) return;
	if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have permissions to use this command.");
	
	if (!args[0]) {
		return message.channel.send('You did not specify a user to whitelist.')
	}

	let requestedUser = args[0]
	message.channel.send(`Successfully whitelisted user **${requestedUser}**`);
	wlUser(message.author, requestedUser, client)
}

});
client.login(process.env.BOT_TOKEN);
