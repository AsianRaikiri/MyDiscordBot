const Levels = require('discord-xp');

module.exports = {
    name:'sleepdeleteuser',
    description:'Löscht die Person aus dem Sleepcounter',
    async execute(message, args, client){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){return message.channel.send("Von welcher Person soll der SleepCounter gelöscht werden?");}

        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id, false);
        if(!levelUser){
            message.channel.send(`${mentionedMember.user.username} hat bereits keinen SleepCounter.`);
        }else{
            try{
                await Levels.deleteUser(mentionedMember.user.id, message.guild.id);
                message.channel.send(`Von ${mentionedMember.user.username} wurde der SleepCounter erfolgreich gelöscht.`)
            }catch(err){
                console.log(err);
            }
        }
    },
};