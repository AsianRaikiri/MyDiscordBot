module.exports = {
    name: 'ready',
    once: true, 
    execute(client){
        console.log(`${client.user.username} is ready to work!`);
        client.user.setActivity({name: "with Chaos", type: "PLAYING"})
    }
}