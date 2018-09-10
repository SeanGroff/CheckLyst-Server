import { gql } from 'apollo-server-express'

import User from '../user/User'

const Item = gql`
  type Item {
    id: ID
    name: String
    completed: Boolean
    completedBy: User
  }
`

export default () => [Item, User]
