import { gql } from 'apollo-server-express'

import User from '../user/User'
import CheckLyst from '../checklyst/CheckLyst'
import TemplateLyst from '../checklyst/TemplateLyst'
import Activity from '../checklyst/Activity'

const Team = gql`
  extend type Query {
    getTeam(teamId: ID!): Team
  }

  type Team {
    id: ID
    name: String
    owner: User
    admins: [User]
    creators: [User]
    users: [User]
    logo: String
    checkLysts: [CheckLyst]
    templateLysts: [TemplateLyst]
    itemsCompleted: Int
    activityLogs: [Activity]
  }
`

export default () => [Team, User, CheckLyst, TemplateLyst, Activity]
