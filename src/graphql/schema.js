const { gql } = require('apollo-server-express')

// GraphQL Schema
const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
  }

  type Item {
    id: ID
    name: String
    completed: Boolean
    completedBy: User
  }

  type CheckLyst {
    id: ID
    name: String
    items: [Item]
    createdBy: User
    users: [User]
    dateCreated: Date
  }

  type TemplateLyst {
    id: ID
    name: String
    items: [Item]
  }

  type User {
    id: ID
    name: String
    email: String
    avatar: String
    checkLysts: [CheckLyst]
    templateLysts: [TemplateLyst]
    itemsCompleted: Int
    friends: [User]
  }
`

module.exports = typeDefs
