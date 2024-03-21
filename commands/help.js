const Discord = require('discord.js');

module.exports = {
    name:'help',
    description:'Gives an overview of every command',
    async execute(message, args, client){
        const botInfo = new Discord.MessageEmbed()
        .setColor(0x0866BE)
        .setTitle('Bob Helper')
        .addField("-ping", '`Just returns pong! back at you. Not really useful eh.`')
        .addField("-help", '`To open the help page, but you are here already so... well.`')
        .addField("-sleepcounteradd {person} (optional){amount}", '`Adds a certain amount to the sleepCounter, if no amount is specified, the sleepCounter is increased by 1. `')
        .addField("-sleepcountersub {person} (optional){amount}", '`Subtracts a certain amount from the sleepCounter, if no amount is specified, the sleepCounter is decreased by 1. `')
        .addField("-sleepstats (optional){person}", '`Just returns the times that person has fallen asleep already. \nIf you don\'t specify a person, it returns our stats.`')
        .addField("-sleepleaderboard", '`It returns the ranking of the 3 people who have fallen asleep the most in class, nothing to be proud of honestly.`')
        .addField("-sleepdeleteuser {person}", '`If you grow weary of a person, this is the way to delete that person permanently.`')
        .addField("-assignments", '`This is for all those lazy people who can\'t even open trello \nto look up what is due in the next two weeks. `')
        .addField("-currentsemester", '`Gives you the current Semester, or at least the semester, the sleepCounter is currently keeping track of.`')
        .addField("-changesemester", '`Changes the current semester to a different one. \nPlease mind the Regex: (WS|SS)2[2-9]`')
        .addField("-richtigcounteradd (optional){amount}", '`Adds a certain amount to the richtigCounter, if no amount is specified, the Richtig Counter is increased by 1. `')
        .addField("-richtigcountersub (optional){amount}", '`Subtracts a certain amount from the richtigCounter, if no amount is specified, the Richtig Counter is decreased by 1.`')
        .addField("-richtigcounterset (optional){amount}", '`Sets the Richtig Counter to a certain value. If no amount is specified, the Richtig Counter is set to 1. `')
        message.channel.send({embeds: [botInfo]});
    },
};