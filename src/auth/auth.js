import jwt from 'jsonwebtoken'

import UserModel from '../models/UserModel'

export const createTokens = ({ id }) => {
  const accessToken = jwt.sign({ id }, process.env.SECRET, { expiresIn: '20m' })
  const refreshToken = jwt.sign({ id }, process.env.SECRET, { expiresIn: '30 days' })

  return Promise.all([accessToken, refreshToken])
}

/**
 * if accessToken expires call this function to obtain NEW tokens.
 */
export const refreshTokens = async ({ tokenRefresh }) => {
  try {
    const { id } = jwt.verify(tokenRefresh, process.env.SECRET)

    const { _id } = await UserModel.findById(id)
    const [accessToken, refreshToken] = await this.createTokens({ id: _id })

    return { accessToken, refreshToken }
  } catch (err) {
    return {}
  }
}
