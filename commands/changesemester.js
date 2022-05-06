const mongoose = require('mongoose');
const Levels = require('discord-xp');
require('dotenv').config();

module.exports = {
    name:'changesemester',
    description:'Changes the current semester to a new semester to your liking.',
    async execute(message, args, client){
        if(!(/((WS)|(SS))2[2-9]/.test(args[0]))){
            return message.channel.send("This is not a valid expression. Please give a valid argument for a semester...\n`Regex:(WS/SS)2[2-9]`")
        }
        client.currentSemester = args[0]; 
        message.channel.send(`The sleepCounter Bot has sucessfully transitioned to the ${client.currentSemester}. `);
    }
};