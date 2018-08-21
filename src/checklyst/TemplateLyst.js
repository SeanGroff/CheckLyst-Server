import { gql } from 'apollo-server-express'

import Item from './Item'

const TemplateLyst = gql`
  type TemplateLyst {
    id: ID
    name: String
    items: [Item]
  }
`

export default () => [TemplateLyst, Item]
