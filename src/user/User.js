import { gql } from 'apollo-server-express'

import CheckLyst from '../checklyst/CheckLyst'
import TemplateLyst from '../checklyst/TemplateLyst'
import Team from '../team/Team'

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
    pro: Boolean
    teams: [Team]
  }
`

export default () => [User, CheckLyst, TemplateLyst, Team]
