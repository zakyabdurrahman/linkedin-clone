const { addUser, findUser, login } = require("../models/user");

const typeDefs =`#graphql
    
    type User {
        _id: ID!,
        name: String!,
        username: String!,
        email: String!,
        password: String,
        imgUrl: String
    }

    input NewUserData{
        name: String!,
        username: String!,
        email: String!,
        password: String!
    }

    type ResponseLogin {
        token: String!
    }



    type Mutation {
        addUser(input: NewUserData): User,
        login(username: String!, password: String!) : ResponseLogin
    
    }

    type Query {
        userProfile: User,
        findUser(name: String) : User
    }



`;

const resolvers = {
    Mutation: {
        addUser,
        login
    },
    Query: {
        findUser
    }
}

module.exports = {
    userTypeDefs: typeDefs,
    userResolvers: resolvers
}

