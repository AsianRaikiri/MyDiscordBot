const Levels = require('discord-xp');

module.exports = {
    name:'sleepcountersub',
    description:'Subtract the sleepCounter of a person by a certain amount.',
    async execute(message, args, client){
        let amount;
        let mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!mentionedMember){return message.channel.send("Who is the person that has been so active in university, to deserve a subtraction of their sleepCounter?");}
        if(args[1] == undefined){
            amount = 1;
        }else{
            amount = args[1];
        }
        if(!(amount > 0)){
            return message.channel.send('This is not a valid number to decrease the sleepCounter by.');
        }
        const levelUser = await Levels.fetch(mentionedMember.user.id, message.guild.id+client.currentSemester, false);
        if(!levelUser){
            return message.channel.send(`${mentionedMember.user.username} never fell asleep in university... There are no negative sleepCounters to give out.`);
        }else if(levelUser.level == 1){
            await Levels.deleteUser(mentionedMember.user.id, message.guild.id+client.currentSemester);
            return message.channel.send(`${mentionedMember.user.username} has a sleepCounter of zero and has been extinguished from the Database.`)
        }else{
            try{
                await Levels.subtractLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, amount)
                await message.channel.send(`${mentionedMember.user.username} fell asleep ${Number(levelUser.level) - Number(amount)} times already.`);
            }catch(err){
                console.log(err);
        }}
    },
};