import { ApolloServer } from 'apollo-server-express'

import schema from './schema'

export default new ApolloServer({
  schema,
  context: ({ req }) => ({
    // req.get() Returns the specified HTTP request header field (case-insensitive match)
    token: req.get('authorization'),
  }),
})
