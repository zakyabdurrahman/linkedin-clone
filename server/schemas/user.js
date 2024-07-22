const { addUser, findUser } = require("../models/user");

const typeDefs =`#graphql
    
    type User {
        _id: ID!,
        name: String!,
        username: String!,
        email: String!,
        password: String!
    }

    input NewUserData{
        name: String!,
        username: String!,
        email: String!,
        password: String!
    }

    type Mutation {
        addUser(input: NewUserData): User
    
    }

    type Query {
        userProfile: User,
        findUser(name: String) : User
    }



`;

const resolvers = {
    Mutation: {
        addUser
    },
    Query: {
        findUser
    }
}

module.exports = {
    userTypeDefs: typeDefs,
    userResolvers: resolvers
}

