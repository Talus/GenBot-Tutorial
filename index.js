const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjIwNDA2MzY1MTQ3NjI3NTIz.XXWWnA.5VEm2RPDh7Ks0f98v9XjYofs8-E';

client.on('ready', () =>{
    console.log('gen bot is now online')
});
client.on('message', message =>{
    if (message.content === 'hello'){
        message.author.send('hi');
    };
});
client.login(token);