import { gql } from 'apollo-server-express'

const DateType = gql`
  scalar Date
`

export default () => DateType
