//in here we defined the methods of a User schema
// define collection for use here

const { getDatabase } = require("../config/mongoConnection");

const collection = getDatabase().collection('users');

async function addUser(_parent, args) {
    try {
        const {name, username, email, password} = args.input;
        await collection.insertOne({
            name, 
            username, 
            email,
            password
        });
        

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser 
}