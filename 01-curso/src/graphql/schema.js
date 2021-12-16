import {gql} from 'apollo-server-core';
import { apiFiltersTypeDefs } from './api-filters/typeDefs';
import { postResolvers } from './post/resolvers';
import { postTypeDefs } from './post/typeDefs';
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

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs, apiFiltersTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];