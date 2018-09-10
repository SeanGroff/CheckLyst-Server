import { gql, makeExecutableSchema } from 'apollo-server-express'

import CheckLyst from '../checklyst/CheckLyst'
import Item from '../checklyst/Item'
import TemplateLyst from '../checklyst/TemplateLyst'
import User from '../user/User'
import Activity from '../checklyst/Activity'
import Team from '../team/Team'
import Label from '../checklyst/Label'

const RootQuery = gql`
  type Query {
    _empty: String
  }
`

export default makeExecutableSchema({
  typeDefs: [RootQuery, CheckLyst, Item, TemplateLyst, User, Activity, Team, Label],
  resolvers: {},
})
