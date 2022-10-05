"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const { knex, mySQLQuery } = require('./mySQL-config');
const typeDefs = (0, apollo_server_1.gql) `
  type Query {
    getUsers: [User!]!
    getUser(id: ID): [User!]!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
    createBook(title: String!, author: String!, description: String!, genre: String!): Book!
    deleteBook(bookId: ID!): String!
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
    genre: String!
  }

  input RegisterInput {
    name: String!
    email_address: String!
    password: String!
    confirm_password: String!
  }

  input LoginInput {
    email_address: String!
    password: String!
  }
`;
const resolvers = {
    Query: {
        // getUsers: () => mySQLQuery('SELECT * FROM users.users'),
        getUsers: () => knex('users'),
        getUser: (parent, args, context, info) => knex('users').where({ id: args.id })
    },
    Mutation: {}
};
module.exports = {
    typeDefs,
    resolvers
};
