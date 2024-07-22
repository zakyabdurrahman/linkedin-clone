const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { userTypeDefs } = require('./schemas/user');

const server =  new ApolloServer({
    typeDefs: userTypeDefs
});



