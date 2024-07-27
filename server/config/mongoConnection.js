
const { MongoClient } = require('mongodb');

const url = process.env.DB_URL;
const client = new MongoClient(url);

const dbName = 'linkedout';

async function connectMongo() {
    try {
        await client.connect();
        console.log('Connected successfully to server');
        return 'done'

    } catch (error) {
        console.log(error);

    }
}

//so database can be called everywhere without invoking connect again and doesnt crash the app 
//if connection failed
function getDatabase() {
    return client.db(dbName);
}

module.exports = {
    connectMongo,
    getDatabase
}