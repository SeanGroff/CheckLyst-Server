import './dotenv'
import './auth/passport'
import express from 'express'
import helmet from 'helmet'
import mongoose from 'mongoose'
import session from 'express-session'
import passport from 'passport'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'

import config from './config'
import authRoutes from './routes/authRoutes'
import apolloServer from './graphql/server'

// Migrate to an import statement
const MongoStore = require('connect-mongo')(session)

const app = express()

const PORT = process.env.PORT || 1337

app.use(helmet())
app.use(cors())
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ url: config.database }),
  })
)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(passport.initialize())
app.use(passport.session())
app.use('/auth', authRoutes)
app.use((err, req, res, next) => {
  // eslint-disable-next-line
  console.log('====== ERROR =======')
  // eslint-disable-next-line
  console.error(err.stack)
  res.status(500)
})

mongoose
  .connect(
    config.database,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Successfully connected to DB!')) // eslint-disable-line
  .catch(err => console.log(`Error connecting to DB: ${err}`)) // eslint-disable-line

apolloServer.applyMiddleware({ app })

app.listen(
  { port: PORT },
  () => console.log(`Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`) // eslint-disable-line
)
