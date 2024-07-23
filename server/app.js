const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { userTypeDefs, userResolvers } = require('./schemas/user');
const {connectMongo} = require('./config/mongoConnection');
const { postTypeDefs, postResolvers } = require('./schemas/post');
const authentication = require('./middleware/auth');

const server =  new ApolloServer({
    typeDefs: [userTypeDefs, postTypeDefs],
    resolvers: [userResolvers, postResolvers]
});



(async () => {
    await connectMongo()
    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 4000
        },
        context: async ({req, res}) => {
            //the context itself returns an object
           return {
                //the object contain a method
                async authentication() {
                    const authData = await authentication(req);
                    return authData;
                }
           } 
        }  
    })
    console.log(`🚀  Server ready at: ${url}`);
})();


