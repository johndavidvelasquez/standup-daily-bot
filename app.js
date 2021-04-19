const Discord = require('discord.js');
require('dotenv').config()

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {

  const addTaskCommand = "add-task";

  
  if (message.content.includes(`${addTaskCommand.toLowerCase()} completed`)) {
    message.author.send('pong completed');
  }

  else if (message.content.includes(`${addTaskCommand.toLowerCase()} in-progress`)) {
    message.author.send('pong in-progress');
  }

  else if(message.content.includes(`${addTaskCommand.toLowerCase()}`)) {
    console.log(message.author.username);
    message.author.send('tset');
  }

  if(message.channel.type == "dm")
  {
     message.author.send('nu yon?');
  }


});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.DISCORD_TOKEN);