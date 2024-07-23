const { ObjectId } = require("mongodb");
const { getDatabase } = require("../config/mongoConnection");

const collection = getDatabase().collection('follows');

async function followUser(_parent, args, context) {
    const {followingId} = args;

    const {userId} = await context.authentication();

    const insert = await collection.insertOne({
        followingId: new ObjectId(followingId),
        followerId: new ObjectId(userId)
    })

    console.log(insert);
}

module.exports = {
    followUser
}