const Levels = require('discord-xp');

module.exports = {
    name:'sleepleaderboard',
    description:' Gibt die Liste zurück mit den Top 3 an am meisten verschlafenen Personen!',
    async execute(message, args, client){
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 3);
        if(rawLeaderboard.length < 1 ){return message.channel.send("Keiner ist bisher im Unterricht eingeschlafen... Das ist erstaunlich.");}
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\n SleepCounter: ${e.level}`);
        message.channel.send(`**Schlaf Leaderboard**: \n\n${lb.join("\n\n")} `);
    },
};