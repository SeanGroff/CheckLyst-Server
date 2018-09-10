import Express from 'express'
import passport from 'passport'

import { createTokens } from '../auth/auth'

const router = Express.Router()

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

router.get('/google/callback', passport.authenticate('google'), async (req, res) => {
  const [accessToken, refreshToken] = await createTokens({ id: req.user._id })

  res.redirect(`${process.env.CLIENT_URI}/?token=${accessToken}&refresh=${refreshToken}`)
})

// router.get('/verify', (req, res) => {
//   try {
//     const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : undefined

//     const decoded = jwt.verify(token, process.env.SECRET)

//     if (decoded) {
//       res.status(200).send({ authorized: true })
//     }
//   } catch (err) {
//     console.log(err)
//     res.status(403).send({ authorized: false })
//   }
// })

router.post('/logout', (req, res) => {
  req.logout()
  res.status(200).send({ success: true })
})

export default router
