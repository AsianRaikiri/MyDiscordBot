const Levels = require('discord-xp');

module.exports = {
    name:'sleepcounteradd',
    description:'Fügt der Person ein weiteres Level im Sleepcounter hinzu',
    async execute(message, args, client){
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){return message.channel.send("Von welcher Person soll der SleepCounter erhöht werden?");}

        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id, false);
        if(!levelUser){
            message.channel.send(`${mentionedMember.user.username} ist bisher noch nie im Unterricht eingeschlafen... Jetzt aber schon :)`);
            try{
                await Levels.createUser(mentionedMember.user.id, message.guild.id);
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id, 1);

            }catch(err){
                console.log(err);
            }
        }else{
            try{
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id, 1);
                await message.channel.send(`${mentionedMember.user.username} ist bereits zum ${levelUser.level}. Mal eingeschlafen`);
            }catch(err){
                console.log(err);
        }}
    },
};