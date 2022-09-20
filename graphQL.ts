import { gql } from 'apollo-server';
const MY_SQL_QUERY = require('./mySQL-config');

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
    greeting: () => MY_SQL_QUERY('SELECT * FROM users.users')
  }
};

module.exports = {
  typeDefs,
  resolvers
}