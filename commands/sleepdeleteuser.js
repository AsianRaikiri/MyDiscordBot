const Levels = require('discord-xp');

module.exports = {
    name:'sleepdeleteuser',
    description:'Deletes a person from the sleepCounter',
    async execute(message, args, client){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){return message.channel.send("Who do you want to erase from the sleepCounter Database?");}

        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id+client.currentSemester, false);
        if(!levelUser){
            message.channel.send(`I know nothing of any ${mentionedMember.user.username}. Maybe you got mistaken?`);
        }else{
            try{
                await Levels.deleteUser(mentionedMember.user.id, message.guild.id+client.currentSemester);
                message.channel.send(`Erased ${mentionedMember.user.username} sucessfully from my memory.`)
            }catch(err){
                console.log(err);
            }
        }
    },
};