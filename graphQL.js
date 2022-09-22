"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const { knex } = require('./mySQL-config');
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    greeting: [User!]!
  }
  
  type User {
    id: String!,
    name: String!,
    email_address: String!,
    password: String!
  }
`;
const resolvers = {
    Query: {
        greeting: () => knex.select().from('users')
    }
};
module.exports = {
    typeDefs,
    resolvers
};
