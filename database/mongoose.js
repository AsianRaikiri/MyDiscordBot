const mongoose = require('mongoose'); 
require('dotenv').config();

module.exports = {
    init: (client) => {
        const dbOptions = {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            autoIndex: false,
            connectTimeoutMS: 10000, 
            family: 4
        }

        mongoose.connect(`mongodb+srv://TestBot:${process.env.dbPassword}@discodbot.mcj08.mongodb.net/SleepDatabase?retryWrites=true&w=majority`, dbOptions);
        mongoose.Promise = global.Promise;

        mongoose.connection.on('connection', () => {
            console.log("The connection to the database has been established.");
        });
        mongoose.connection.on('disconnected', () => {
            console.log("The connection to the database has been severed.");
        });
        mongoose.connection.on('err', err => {
            console.log("There has been an error in connecting to the Database: \n" + err);
        });
    }
}