const Levels = require('discord-xp');

module.exports = {
    name:'richtigcountersub',
    description:'Subtract the RichtigCounter by a certain amount.',
    async execute(message, args, client){
        let amount;
        if(args[1] == undefined){
            amount = 1;
        }else{
            amount = args[1];
        }
        if(!(amount > 0)){
            return message.channel.send('This is not a valid number to decrease the sleepCounter by.');
        }
        const levelUser = await Levels.fetch("Sulzmann", message.guild.id+client.currentSemester, false);
        if(!levelUser){
            return message.channel.send(`RichtigCounter is already at zero, nothing to subtract`);
        }else if(levelUser.level == 1){
            await Levels.deleteUser("Sulzmann", message.guild.id+client.currentSemester);
            return message.channel.send(`Richtig Counter is zero and has been purged from the Database.`)
        }else{
            try{
                await Levels.subtractLevel("Sulzmann", message.guild.id+client.currentSemester, amount)
                await message.channel.send(`Richtig Counter: ${Number(levelUser.level) -  Number(amount)}`);
            }catch(err){
                console.log(err);
        }}
    },
};