module.exports = {
    name:'ping',
    description:'Sending Pong! back to everyone who says ping.',
    execute(message, args, client){
        message.channel.send('Pong!');
    },
};