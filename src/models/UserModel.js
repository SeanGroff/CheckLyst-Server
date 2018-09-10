import mongoose from 'mongoose'
import mongodbErrorHandler from 'mongoose-mongodb-errors'

const Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: {
    type: String,
    required: 'Google ID required',
    minLength: 1,
    trim: true,
    unique: true,
  },
})

userSchema.plugin(mongodbErrorHandler)

export default mongoose.model('UserModel', userSchema)
