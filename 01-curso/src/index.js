import {ApolloServer, gql} from 'apollo-server'

const server = new ApolloServer({
    typeDefs: gql`
    type Query {
        user: User!
        users: [User!]!
    }

    type User {
        id: ID!
        userName: String!
    }
    `,

    resolvers: {
        Query: {
            user: () => {
                return {
                    id: '54fd0fvs5v10',
                    userName: 'Gustavo',
            };
        },

        users: () => {
            return [
                {
                id: '54fd0fvs5v10',
                userName: 'Gustavo',
                },
                {
                id: 'f53d4s s1',
                userName: 'Justo',
                },
                {
                id: 'd45fg0sd54v1d',
                userName: 'Miranda',
                },
            ];
    },
    },
}
});

server.listen(4000).then(({url}) => {
    console.log(`server running at ${url}`);
});