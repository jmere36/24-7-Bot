/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDEyMTQwNjI5NzcwODk1Mzcw.DWWqqg.QOCds9Iuk2NRhuQ4txFQHV3yA3s';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

client.on('message', message => {
  // If the message is "rip"
  if (message.content === 'rip') {
    // Send "pong" to the same channel
    message.channel.send('rip');
  }
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
    if (message.content === 'ya') {
    	message.reply('YEET');
  	}
});

client.on('message', message => {
    if (message.content === 'but can you do this?') {
    	message.reply('ideed i can: https://www.tenor.co/TyZY.gif ');
  	}
});

// Log our bot in
client.login(token);