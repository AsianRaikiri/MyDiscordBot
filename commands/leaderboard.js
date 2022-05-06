const Levels = require('discord-xp');

module.exports = {
    name:'sleepleaderboard',
    description:' Returns the leaderboard of the top 3 most sleepy people in school',
    async execute(message, args, client){
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id+client.currentSemester, 3);
        if(rawLeaderboard.length < 1 ){return message.channel.send("No one fell asleep in the university yet... Impressive.");}
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true);

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\n SleepCounter: ${e.level}`);
        message.channel.send(`**Sleep Leaderboard**: \n${lb.join("\n")} `);
    },
};