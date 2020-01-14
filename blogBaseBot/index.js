const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.EMMA);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  for([id, guild] of client.guilds) {
      console.log(guild.name);
  }
});

client.on('message', (message) => {
    if(message.channel.name === 'annoucements') {
        //log
        
    }
});



