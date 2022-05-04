    const Discord = require('discord.js');

module.exports = {
    name:'help',
    description:'Gives an overview of every command',
    async execute(message, args, client){
        const botInfo = new Discord.MessageEmbed()
        .setColor(0x0866BE)
        .setTitle('Bob Helper ')
        .addField("`-ping`", 'Just returns pong! back at you. Not really useful eh.')
        .addField("`help`", 'To open the help page, but you are here already so... well.')
        .setTitle('Sleep Commands')
        .addField("`sleepcounteradd {person}`", 'Increments the sleep counter of the person. It does nothing else')
        .addField("`sleepstats (optional){person}`", 'just returns the times that person has fallen asleep already. \nIf you don\'t specify a person, it returns our stats.')
        .addField("`sleepleaderboard`", 'It returns the ranking of the 3 people who have fallen asleep the most in class, nothing to be proud of honestly.')
        .addField("`sleepdeleteuser {person}`", 'If you grow weary of a person, this is the way to delete that person permanently.')
        message.channel.send({embeds: [botInfo]});
    },
};