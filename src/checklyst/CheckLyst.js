import { gql } from 'apollo-server-express'

import Item from './Item'
import User from '../user/User'
import Label from '../checklyst/Label'

const CheckLyst = gql`
  extend type Query {
    getCheckLyst(id: ID!): CheckLyst
  }

  type CheckLyst {
    id: ID
    name: String
    items: [Item]
    createdBy: User
    users: [User]
    dateCreated: String
    activityLog: [Activity]
    label: Label
  }
`

export default () => [CheckLyst, Item, User, Label]
