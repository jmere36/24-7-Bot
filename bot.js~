
const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDEyMTQwNjI5NzcwODk1Mzcw.DWWqqg.QOCds9Iuk2NRhuQ4txFQHV3yA3s';

// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.channel.send('pong');
  }
});

client.on('message', message => {
  if (message.content === 'rip') {
    message.channel.send('rip');
  }
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
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

client.login(token);