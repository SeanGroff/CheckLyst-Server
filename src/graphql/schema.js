const { gql } = require('apollo-server-express')

// GraphQL Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`

module.exports = typeDefs
