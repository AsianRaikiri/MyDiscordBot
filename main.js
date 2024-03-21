const Discord = require('discord.js');
const mongoose = require('./database/mongoose');
const Levels = require('discord-xp');
const fs = require('fs');
require('dotenv').config();

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.prefix = "-";
client.commands = new Discord.Collection();
client.currentSemester = "SS24";

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
Levels.setURL(`mongodb+srv://TestBot:${process.env.dbPassword}@discodbot.mcj08.mongodb.net/SleepDatabase?retryWrites=true&w=majority`);

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

mongoose.init(client);
client.login(process.env.userTokenTest);