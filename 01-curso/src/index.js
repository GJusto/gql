import {ApolloServer, gql} from 'apollo-server'
import { typeDefs, resolvers } from './graphql/schema'

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen(4000).then(({url}) => {
    console.log(`server running at ${url}`);
});