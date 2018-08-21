import { gql } from 'apollo-server-express'

import Item from './Item'
import User from '../user/User'

const CheckLyst = gql`
  extend type Query {
    getCheckLyst(id: Int!): CheckLyst
  }

  type CheckLyst {
    id: ID
    name: String
    items: [Item]
    createdBy: User
    users: [User]
    dateCreated: String
  }
`

export default () => [CheckLyst, Item, User]
