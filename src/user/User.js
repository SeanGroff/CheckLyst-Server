import { gql } from 'apollo-server-express'

import CheckLyst from '../checklyst/CheckLyst'
import TemplateLyst from '../checklyst/TemplateLyst'

const User = gql`
  extend type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
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

export default () => [User, CheckLyst, TemplateLyst]
