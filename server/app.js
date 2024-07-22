const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { userTypeDefs, userResolvers } = require('./schemas/user');
const {connectMongo} = require('./config/mongoConnection');

const server =  new ApolloServer({
    typeDefs: userTypeDefs,
    resolvers: userResolvers
});



(async () => {
    await connectMongo()
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        }
    })
    console.log(`🚀  Server ready at: ${url}`);
})();


