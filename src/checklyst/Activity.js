import { gql } from 'apollo-server-express'

import User from '../user/User'
import CheckLyst from '../checklyst/CheckLyst'

const Activity = gql`
  enum ActivityType {
    CREATE
    EDIT
    DELETE
    COMPLETE
  }

  extend type Query {
    getActivities(checkLystId: ID!): [Activity]
  }

  type Activity {
    id: ID
    type: ActivityType
    date: String
    user: User
    checkLyst: CheckLyst
  }
`

export default () => [Activity, User, CheckLyst]
