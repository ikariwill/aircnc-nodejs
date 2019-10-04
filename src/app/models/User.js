const { model, Schema } = require('mongoose')

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('User', UserSchema)
