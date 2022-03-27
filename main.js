const Discord = require('discord.js');
const PropertiesReader = require('properties-reader');
const properties = PropertiesReader('./loginInformation.properties');


const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log('The real one is online!');
})

client.login(properties.get('user-Token'));