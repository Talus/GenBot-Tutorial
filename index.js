const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjIwNDA2MzY1MTQ3NjI3NTIz.XXZzLQ.2L8WjdPdcBSb1FLWmrA7EctfYDs';

client.on('ready', () =>{
    console.log('gen bot is now online')
});
client.on('message', message =>{
    if (message.content === 'hello'){
        message.author.send('hi');
    };
});
client.on('message', message =>{
    if (!message.guild) return;
if (message.content === '=test'){
    var string = `test1
    test2
    test3
    test4
    test5`
    var words = string.split('\n');
    let random = words[Math.floor(Math.random()*words.length)];
    message.author.send(`${random}`);
};
});
client.login(token);
