const Levels = require('discord-xp');

module.exports = {
    name:'sleepcounteradd',
    description:'Add sleepCounter to a person',
    async execute(message, args, client){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){return message.channel.send("Which person fell asleep in university?");}

        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id+client.currentSemester, false);
        if(!levelUser){
            message.channel.send(`${mentionedMember.user.username} never fell asleep in university... at least until now.`);
            try{
                await Levels.createUser(mentionedMember.user.id, message.guild.id+client.currentSemester);
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, 1);

            }catch(err){
                console.log(err);
            }
        }else{
            try{
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, 1);
                await message.channel.send(`${mentionedMember.user.username} fell asleep ${levelUser.level} times already.`);
            }catch(err){
                console.log(err);
        }}
    },
};