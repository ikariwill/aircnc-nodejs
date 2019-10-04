const { User } = require('../models')

class SessionController {
  async store(req, res) {
    try {
      const { email } = req.body

      let user = await User.findOne({ email })

      if (!user) {
        user = await User.create({ email })
      }

      return res.json(user)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

module.exports = new SessionController()
