// import './dotenv'
// import './auth/passport'
import express from 'express'
import helmet from 'helmet'
// import session from 'express-session'
// import passport from 'passport'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from './generated'

// import authRoutes from './routes/authRoutes'

const app = express()

app.use(helmet())
app.use(cors())
// app.use(
//   session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ url: config.database }),
//   })
// )
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use('/auth', authRoutes)
app.use((err, req, res, next) => {
  console.log('====== ERROR =======') // eslint-disable-line
  console.error(err.stack) // eslint-disable-line
  res.status(500)
})

const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      return context.prisma.query.user(
        {
          where: {
            id: args.id,
          },
        },
        info
      )
    },
  },
  Mutation: {
    signup: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            name: args.name,
          },
        },
        info
      )
    },
  },
}

const server = new GraphQLServer({
  typeDefs: './src/graphql/schema.graphql',
  resolvers,
  context: req => ({
    req,
    prisma: Prisma,
  }),
})

server.start(() => console.log(`GraphQL server is running on http://localhost:4000`)) // eslint-disable-line
