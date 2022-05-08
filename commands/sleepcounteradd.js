const Levels = require('discord-xp');

module.exports = {
    name:'sleepcounteradd',
    description:'Add sleepCounter to a person',
    async execute(message, args, client){
        let amount;
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){return message.channel.send("Which person fell asleep in university?");}
        if(args[1] == undefined){
            amount = 1;
        }else{
            amount = args[1];
        }
        if(!(amount > 0)){
            return message.channel.send('This is not a valid number to increase the sleepCounter by.');
        }
        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id+client.currentSemester, false);
        if(!levelUser){
            message.channel.send(`${mentionedMember.user.username} never fell asleep in university... at least until now.`);
            try{
                await Levels.createUser(mentionedMember.user.id, message.guild.id+client.currentSemester);
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, amount);

            }catch(err){
                console.log(err);
            }
        }else{
            try{
                await Levels.appendLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, amount)
                await message.channel.send(`${mentionedMember.user.username} fell asleep ${Number(amount) + Number(levelUser.level)} times already.`);
            }catch(err){
                console.log(err);
        }}
    },
};