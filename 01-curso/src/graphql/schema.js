import {gql} from 'apollo-server-core';
import { userResolvers } from './user/resolvers';
import { userTypeDefs } from './user/typeDefs';

const rootTypeDefs = gql `
    type Query {
        hi: String
    }
`;

const rootResolvers ={
    Query: {
        hi: () => 'hi again'
    }
}

export const typeDefs = [rootTypeDefs, userTypeDefs];
export const resolvers = [rootResolvers, userResolvers];