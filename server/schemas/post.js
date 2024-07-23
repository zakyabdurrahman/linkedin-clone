const { addPost, getPosts, addLike, addComment, getPost } = require("../models/post")

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
        likes: [Like],
        createdAt: String,
        updatedAt: String,
        author: User

        
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
        
        
    }

    type Query {
        getPosts: [Post],
        getPost(id: ID) : Post
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
        getPosts,
        getPost
    }
    
}


module.exports = {
    postTypeDefs: typeDefs,
    postResolvers: resolvers
}
