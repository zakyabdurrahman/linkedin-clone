//in here we defined the methods of a User schema
// define collection for use here

const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

const collection = getDatabase().collection('users');

async function addUser(_parent, args) {
    try {
        const {name, username, email, password} = args.input;
        const userCreated = await collection.insertOne({
            name, 
            username, 
            email,
            password
        });
        const newUser = await collection.findOne({_id: new ObjectId(userCreated.insertedId)})

        return newUser



    } catch (error) {
        console.log(error);
    }
}

async function findUser(_parent, args) {
    try {
        const nameRegex = new RegExp(`/.*${args.name}.*/`);
        const user = await collection.findOne({name: {
            $regex: `(?i).*${args.username}.*(?-i)`
        }})
        return user;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addUser,
    findUser 
}