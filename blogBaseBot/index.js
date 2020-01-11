const Discord = require('discord.js');
const client = new Discord.Client();
const knex = require('../database/database');


function addPost(message) {
    knex('posts').insert({
        id: message.id,
        author: message.author.username,
        avatar: message.member.nickname,
        date: message.createdAt.toISOString(),        
        content: message.content
    }).then( result => {console.log('Added message')}, result => {console.log(result)});
}


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
        addPost(message);
    }
});



