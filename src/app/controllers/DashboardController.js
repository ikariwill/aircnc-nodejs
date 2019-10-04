const { Spot } = require('../models')

class DashboardController {
  async show(req, res) {
    const { user_id } = req.headers

    const spots = await Spot.find({ user: user_id })

    return res.json(spots)
  }
}

module.exports = new DashboardController()
