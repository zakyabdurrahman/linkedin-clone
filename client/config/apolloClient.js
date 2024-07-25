import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://mnr7257t-4000.asse.devtunnels.ms/",
  cache: new InMemoryCache(),
});

export default client;
