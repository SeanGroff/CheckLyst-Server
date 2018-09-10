import passport from 'passport'
import oauth from 'passport-google-oauth20'

import UserModel from '../models/UserModel'

const GoogleStrategy = oauth.Strategy

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserModel.findById(id)
    done(null, user)
  } catch (err) {
    // eslint-disable-next-line
    console.log(err)
  }
})

// https://github.com/jaredhanson/passport-google-oauth2
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const currentUser = await UserModel.findOne({
          googleId: profile.id,
        })

        if (currentUser) {
          // user exists in db
          return done(null, currentUser)
        } else {
          // create new user
          const newUser = await new UserModel({
            googleId: profile.id,
          }).save()

          return done(null, newUser)
        }
      } catch (err) {
        // eslint-disable-next-line
        console.log(err)
        return done(err)
      }
    }
  )
)
