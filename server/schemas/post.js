const { addPost, getPosts, addLike, addComment } = require("../models/post")

const typeDefs = `#graphql


    type Comment {
        
        content: String!,
        username: String!,
        createdAt: String,
        updatedAt: String
    }

    type Like {
        
        username: String!,
        createdAt: String,
        updatedAt: String
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

    input CommentData {
        content: String!,
        username: String!,
        createdAt: String!,
        updatedAt: String!
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
        addPost(input: PostContent) : Post,
        addLike(username: String!, createdAt: String!, updatedAt: String!, postId: ID): Post,
        addComment(input: CommentData!, postId: ID!) : Post
    }

`

const resolvers = {
    Mutation: {
        addPost,
        addLike,
        addComment
    },
    Query: {
        getPosts
    }
    
}


module.exports = {
    postTypeDefs: typeDefs,
    postResolvers: resolvers
}
