const Discord = require('discord.js');
const mongoose = require('./database/mongoose');
const Levels = require('discord-xp');
const fs = require('fs');
require('dotenv').config();

Levels.setURL(`mongodb+srv://TestBot:${process.env.dbPassword}@discodbot.mcj08.mongodb.net/BotDatabase?retryWrites=true&w=majority`);
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.prefix = "-";
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));


for(const file of commandFiles) {
    const command = require('./commands/' + file);
    client.commands.set(command.name, command);
}
for(const file of eventFiles) {
    const event = require('./events/' + file);
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    }else{
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}



mongoose.init();
client.login(process.env.userToken);