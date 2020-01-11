const Discord = require('discord.js');
const client = new Discord.Client();
const knex = require('../database/database');


function addPost(message) {
    
    knex('posts').insert({
        id: message.id,
        author: message['member'].nickname ? message['member'].nickname : message['author'].username,
        avatar: message['author'].displayAvatarURL,
        date: message.createdAt.toISOString(),        
        content: message.content
    }).then( result => {console.log('Added message')}, result => {console.log(result)});
}


client.login(process.env.EMMA);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  for([id, guild] of client.guilds) {
      for([id, channel] of guild.channels) {
        console.log(channel.name);
        if(channel.name == "announcements") {
            if(channel.type == 'text') {
                channel.fetchMessages({limit: 50}).then(messages => { 
                    for([id, message] of messages) {
                        addPost(message);
                    }
                });
            }
        }
      }
  }
});

client.on('message', (message) => {
    if(message.channel.name === 'announcements') {
        //log
        addPost(message);
    }
});



