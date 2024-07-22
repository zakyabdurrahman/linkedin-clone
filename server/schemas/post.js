const { addPost, getPosts } = require("../models/post")

const typeDefs = `#graphql


    type Comment {
        
        content: String!,
        username: String!,
        createdAt: String!,
        updatedAt: String!
    }

    type Like {
        
        username: String!,
        createdAt: String!,
        updatedAt: String!
    }

    type Post {
        _id: ID!,
        content: String!,
        tags: [String],
        imgUrl: String,
        authorId: ID!,
        comments: [Comment],
        likes: [Like]
        
    }

    

    input PostContent {
        content: String!,
        tags: [String],
        imgUrl: String,
        authorId: ID!,
        
    }

    type Query {
        getPosts: [Post]
    }

    type Mutation {
        addPost(input: PostContent) : Post
    }

`

const resolvers = {
    Mutation: {
        addPost
    },
    Query: {
        getPosts
    }
    
}


module.exports = {
    postTypeDefs: typeDefs,
    postResolvers: resolvers
}
