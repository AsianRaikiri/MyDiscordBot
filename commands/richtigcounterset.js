const Levels = require('discord-xp');

module.exports = {
    name:'richtigcounterset',
    description:'Set the RichtigCounter to a certain amount.',
    async execute(message, args, client){
        let amount;
        if(args[1] == undefined){
            amount = 1;
        }else{
            amount = args[1];
        }
        if(!(amount > 0)){
            return message.channel.send('This is not a valid number to set the Richtig Counter at.');
        }
        const levelUser = await Levels.fetch("Sulzmann", message.guild.id+client.currentSemester, false);
        if(!levelUser){
            try{
                await Levels.createUser(mentionedMember.user.id, message.guild.id+client.currentSemester);
                await Levels.setLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, amount);

            }catch(err){
                console.log(err);
            }
        }else{
            try{
                await Levels.setLevel(mentionedMember.user.id, message.guild.id+client.currentSemester, amount)
                await message.channel.send(`Richtig Counter: ${amount}`);
            }catch(err){
                console.log(err);
        }}
    },
};