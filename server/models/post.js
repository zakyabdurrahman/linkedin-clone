const { ObjectId } = require('mongodb');
const {getDatabase} = require('../config/mongoConnection');
 
const collection = getDatabase().collection('posts');


async function addPost(_parent, args) {
    try {
        const {content,
            tags,
            imgUrl,
            authorId,
            } = args.input;

        const insertSuccess = await collection.insertOne({
            content,
            tags,
            imgUrl,
            authorId: new ObjectId(authorId)
        });

        
        const newPost = await collection.findOne({_id: new ObjectId(insertSuccess.insertedId)});
        return newPost
    } catch (error) {
        console.log(error);
    }
}

async function getPosts() {
    try {
        const posts = await collection.find({}).toArray();
        return posts

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addPost,
    getPosts
}