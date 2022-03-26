const Discord = require('discord.js');

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log('The real one is online!');
})

client.login('Add your own Bot Token here');