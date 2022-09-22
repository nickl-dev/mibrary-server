import { gql } from 'apollo-server';
const { knex } = require('./mySQL-config');

const typeDefs = gql`
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
}