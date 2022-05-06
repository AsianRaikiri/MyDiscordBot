module.exports = {
    name:'currentsemester',
    description:'Sagt dir in welchem Semester der sleepcounter Bot gerade ist.',
    execute(message, args, client){
        message.channel.send(`The sleepCounter Bot is currently adding stats to the ${client.currentSemester}.`);
    },
};