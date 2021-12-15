import {ApolloServer, gql} from 'apollo-server'
import { typeDefs, resolvers } from './graphql/schema'
import fetch from 'node-fetch';

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => {
        return {
            fetch,
        };
    },
});

server.listen(4000).then(({url}) => {
    console.log(`server running at ${url}`);
});