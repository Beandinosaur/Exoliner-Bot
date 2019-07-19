const Discord = require('discord.js');
const request = require('request');
const sitekey = process.env.SITE_KEY

async function blUser(whitelister, user, client) {
	
	let acceptWlChannel = client.channels.get("599542199998349312")
	let WlLogs = client.channels.get("599583754587078676")
	
	
	request(`http://whatareyoulookingatsir.000webhostapp.com/removeWL.php?name=${user}&key=${sitekey}`, function (error, response, body) {
		console.log('error:', error); // Print the error if one occurred
		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		console.log('body:', body); // Print the HTML for the Google homepage.
	});
	       
	const embed = {
		"color": 4886754,
		"author": {
			"name": "Whitelist System"
		},
		"fields": [
			{
				"name": "User Blacklisted:",
				"value": `${user}`,
				"inline": true
			},
			{
				"name": "Blacklisted by:",
				"value": `${whitelister}`,
				"inline": true
			}
		]
	};
	WlLogs.send({ embed });
}

module.exports = blUser;