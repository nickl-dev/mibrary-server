"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const { knex, mySQLQuery } = require('./mySQL-config');
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    users: [User!]!
    user(id: ID): [User!]!
  }
  
  type User {
    id: ID!
    name: String!
    email_address: String!
    password: String!
    books: [Book!]
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    description: String!
  }
`;
const resolvers = {
    Query: {
        users: () => mySQLQuery('SELECT * FROM users.users'),
        user: (parent, args, context, info) => knex('users').where({ id: args.id })
    }
};
module.exports = {
    typeDefs,
    resolvers
};
