import { gql, makeExecutableSchema } from 'apollo-server-express'

import CheckLyst from '../checklyst/CheckLyst'
import Item from '../checklyst/Item'
import TemplateLyst from '../checklyst/TemplateLyst'
import User from '../user/User'

const RootQuery = gql`
  type Query {
    _empty: String
  }
`

export default makeExecutableSchema({
  typeDefs: [RootQuery, CheckLyst, Item, TemplateLyst, User],
  resolvers: {},
})
