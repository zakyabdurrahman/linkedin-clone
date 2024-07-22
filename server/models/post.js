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
            authorId: new ObjectId(authorId),
            comments: [],
            likes: []
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

async function addLike(_parent, args) {
    try {
        const {username, createdAt, updatedAt, postId} = args;
        const updatedSuccess = await collection.updateOne(
            {_id: new ObjectId(postId)},
            {
                $push: {
                    likes: {
                        username,
                        createdAt,
                        updatedAt
                    }
                }
            }
        )

        const post = await collection.findOne({_id: new ObjectId(postId)});
        

        return post
    } catch (error) {
        console.log(error);
    }
}

async function addComment(_parent, args) {
    try {
        const {postId} = args;
        const {content, username, createdAt, updatedAt} = args.input;

        const update = await collection.updateOne(
            {_id: new ObjectId(postId)},
            {
                $push: {
                    comments: {
                        content,
                        username, 
                        createdAt, 
                        updatedAt
                    }
                }
            }
        )
        const updatedPost = await collection.findOne({_id: new ObjectId(postId)});

        return updatedPost;       
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    addPost,
    getPosts,
    addLike,
    addComment
}