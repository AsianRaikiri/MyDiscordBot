const Levels = require('discord-xp');

module.exports = {
    name:'sleepstats',
    description:'Gibt den momentanen SleepCounter der Person wieder.',
    async execute(message, args, client){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){mentionedMember = message.member;}
        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id, false);
        if(!target){return message.channel.send(`${mentionedMember.user.username} ist noch nie im Unterricht eingeschlafen.`);}

        try{
            message.channel.send(`${mentionedMember.user.tag} ist ${target.level} mal im Unterricht eingeschlafen.`);
        }catch (err){
            console.log(err);
        }
    },
};