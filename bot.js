
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
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

client.on('message', message => {
    if (message.content === 'rip') {
    	message.reply('rip');
  	}
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
