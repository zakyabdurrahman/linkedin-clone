const { ObjectId } = require('mongodb');
const {getDatabase} = require('../config/mongoConnection');
const { createError } = require('../helpers/helpers');
const redis = require('../config/redis');
 
const collection = getDatabase().collection('posts');


async function addPost(_parent, args, context) {
    const loginData = await context.authentication();
    const {
            content,
            tags,
            imgUrl,
        } = args.input;
    
    if (!content) throw createError('Post content is required', 400);

    const insertSuccess = await collection.insertOne({
        content,
        tags,
        imgUrl,
        authorId: new ObjectId(loginData.userId),
        comments: [],
        likes: [],
        createdAt: new Date(),
        updatedAt: new Date()
    });

    
    const newPost = await collection.findOne({_id: new ObjectId(insertSuccess.insertedId)});
    return newPost
    
}

async function getPosts(_paren, _args, context) {
    
    const loginData = await context.authentication();


    const agg = [
        {
        '$lookup': {
            'from': 'users', 
            'localField': 'authorId', 
            'foreignField': '_id', 
            'as': 'author'
        }
        }, {
        '$sort': {
            'createdAt': -1
        }
        }, {
        '$unwind': {
            'path': '$author', 
            'preserveNullAndEmptyArrays': true
        }
        }, {
        '$project': {
            'author.password': 0
        }
        }
    ];

    //find out if its first time getting the data = no cache
    

    const postCache = await redis.get('data:posts');

    

    const authoredPosts = await collection.aggregate(agg).toArray();

    if (!postCache) {
        await redis.set('data:posts', JSON.stringify(authoredPosts));
    }

    console.log(postCache);

    return authoredPosts;


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

async function getPost(_parent, args, context) {
    //authenticate
    await context.authentication();

    const {id} = args;

    const post = await collection.findOne({_id: new ObjectId(id)});

    return post
} 


module.exports = {
    addPost,
    getPosts,
    addLike,
    addComment,
    getPost
}