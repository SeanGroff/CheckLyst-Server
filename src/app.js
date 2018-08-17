require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const apolloServer = require('./graphql/server')
const config = require('./config')
const authRoutes = require('./routes/authRoutes')

require('./auth/passport')

const app = express()
const PORT = process.env.PORT || 1337

mongoose
  .connect(
    config.database,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Successfully connected to DB!'))
  .catch(err => console.log(`Error connecting to DB: ${err}`))

apolloServer.applyMiddleware({ app })

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
  console.log('====== ERROR =======')
  console.error(err.stack)
  res.status(500)
})

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
)
