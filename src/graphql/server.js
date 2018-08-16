const { ApolloServer } = require('apollo-server-express')
const resolvers = require('./resolvers')
const typeDefs = require('./schema')

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    // req.get() Returns the specified HTTP request header field (case-insensitive match)
    token: req.get('authorization'),
  }),
})
