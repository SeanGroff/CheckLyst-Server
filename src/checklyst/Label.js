import { gql } from 'apollo-server-express'

import CheckLyst from './CheckLyst'

const Label = gql`
  extend type Query {
    getLabel(userId: ID!, checkLystId: ID!): Label
    getLabels(userId: ID!): [Label]
  }

  enum Color {
    BLUE
    GREEN
    PINK
    ORANGE
    PURPLE
  }

  type Label {
    id: ID
    userId: ID
    checkyLysts: [CheckLyst]
    name: String
    color: Color
  }
`

export default () => [Label, CheckLyst]
