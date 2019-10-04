const { Spot } = require('../models')

class DashboardController {
  async show(req, res) {
    try {
      const { user_id } = req.headers

      const spots = await Spot.find({ user: user_id })

      return res.json(spots)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

module.exports = new DashboardController()
