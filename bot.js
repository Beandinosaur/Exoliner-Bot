const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
  console.log(`Ready!`);
});

client.on('message', message => {
if (message.content.indexOf(prefix) !== 0) return;
	
var sender = message.author
let args = message.content.slice(prefix.length).split(/ +/);
let channel = client.channels.get("599542199998349312")
const command = args.shift().toLowerCase();

const requestReactions = {
	ACCEPT: '✅',
	DENY: '❌',
}

if (command === 'request') {
	if (message.channel.type == "dm") {
		let username = args[0]
		message.channel.send(`Sent request for account ${username}.`)
		
		const filter = (reaction, user) => {
			return ['✅', '❌'].includes(reaction.emoji.name) && user.id === message.author.id;
		};
		
		channel.send(`User ${sender} sent a whitelist request for username '${username}'.`).then(async message => {
			message.react('✅').then(() => message.react('❌'));
			
			
			
			message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
				.then(collected => {
				const reaction = collected.first();
				if (reaction.emoji.name === '✅') {
					message.reply('you reacted with a thumbs up.');
				}
				else {
					message.reply('you reacted with a thumbs down.');
				}
			})
			.catch(collected => {
				console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
				message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
			});
		})
	}
}
	
if (command == 'whitelist') {
	if (!message.member.permissions.has('ADMINISTRATOR') return message.channel.send('You do not have permissions to use this command.')
	if (!args[0]) return message.channel.send('You did not specify the user to whitelist.')
	
	let user = args[0]
	message.channel.send(`Successfully whitelisted user ${user}`);
}
  
});

client.login(process.env.BOT_TOKEN);
