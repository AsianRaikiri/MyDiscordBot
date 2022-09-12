const fetch = require('node-fetch');

module.exports = {
    name:'assignments',
    description:'Tells you which assignments are due in the next 2 weeks',
    async execute(message, args, client){
        const boardId = '6242eb8c59f5924881d0f75c'
        const twoWeeksNoticeListId = '6242f6d141caea066c241594'
        const oneWeekNoticeListId = '6252021ae8e87375f1222fdc'
        let twoWeeksResponse = [];
        let oneWeekResponse = [];

        fetch(`https://api.trello.com/1/lists/${twoWeeksNoticeListId}/cards?key=${process.env.trelloKey}&token=${process.env.trelloToken}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
            return response.text();
        }).then(text => {
            const textJson = JSON.parse(text)
            textJson.forEach(card => {
                let cardInfo = [card.name, new Date(card.due).toLocaleDateString("ger")]
                twoWeeksResponse.push(cardInfo)
            });
            
            fetch(`https://api.trello.com/1/lists/${oneWeekNoticeListId}/cards?key=${process.env.trelloKey}&token=${process.env.trelloToken}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                return response.text();
            }).then(text => {
                const textJson = JSON.parse(text)
                textJson.forEach(card => {
                    let cardInfo = [card.name, new Date(card.due).toLocaleDateString("ger")]
                    oneWeekResponse.push(cardInfo)
                });
                let oneWeekMessage = "";
                oneWeekResponse.forEach(card => {
                    oneWeekMessage += `*${card[0]}* due on the *${card[1]}*\n\n`
                })
                let twoWeeksMessage = "";
                twoWeeksResponse.forEach(card => {
                    twoWeeksMessage += `*${card[0]}* due on the *${card[1]}*\n\n`
                })
                message.channel.send(`**Current open assignments in this week:**\n\n${oneWeekMessage}\n**And in two next two weeks, these assignments have to be done:**\n\n${twoWeeksMessage}`)
            })
            .catch(err => console.error(err));
            })
        .catch(err => console.error(err));
    },
};