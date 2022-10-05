import { gql } from 'apollo-server';
const { knex, mySQLQuery } = require('./mySQL-config');

const typeDefs = gql`
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
    getUsers: () => knex('users'),
    getUser: (parent: any, args: any, context: any, info: any) => knex('users').where({ id: args.id }) 
  },
  Mutation: {}
};

module.exports = {
  typeDefs,
  resolvers
}