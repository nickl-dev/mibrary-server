import { gql } from 'apollo-server';
const { knex, mySQLQuery } = require('./mySQL-config');

const typeDefs = gql`
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
    user: (parent: any, args: any, context: any, info: any) => knex('users').where({ id: args.id }) 
  }
};

module.exports = {
  typeDefs,
  resolvers
}