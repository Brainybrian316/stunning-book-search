const { gql } = require('apollo-server-express');

// typeDefs is a string that contains all of the GraphQL schema
const typeDefs = gql`
type Query {
  me: User
}
type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  saveBook(newBook: BookInput!): User
  deleteBook(bookId: ID!): User
}

  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Auth {
    token: ID!
    user: User
  }

  input Book {
    bookId: ID!
    authors: [String]
    title: String
     description: String
    image: String
    link: String
  }

  input BookInput {
    bookId: String
    authors: [String]
    title: String
    description: String
    image: String
    link: String
  }
`;

module.exports = typeDefs;
