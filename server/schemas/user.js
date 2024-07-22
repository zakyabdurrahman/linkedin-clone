const typeDefs =`#graphql
    
    type User {
        id: ID!,
        name: String!,
        username: String!,
        email: String!,
        password: String!
    }

    type Query {
        userProfile: User
    }

`;

module.exports = {
    userTypeDefs: typeDefs
}

