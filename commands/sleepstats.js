const Levels = require('discord-xp');

module.exports = {
    name:'sleepstats',
    description:'Returns current stats of the persons sleepCounter',
    async execute(message, args, client){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){mentionedMember = message.member;}
        const target = await Levels.fetch(mentionedMember.user.id, message.guild.id+client.currentSemester, false);
        if(!target){return message.channel.send(`${mentionedMember.user.username} never fell asleep in university. What a nerd.`);}

        try{
            if(target.level > 1){
            message.channel.send(`${mentionedMember.user.tag} fell asleep ${target.level} times already. Why even bother coming to university?`);
            }else{
                message.channel.send(`${mentionedMember.user.tag} only fell asleep once. That is pretty impressive.`)
            }
        }catch (err){
            console.log(err);
        }
    },
};