const { Spot, User } = require('../models')

class SpotController {
  async index(req, res) {
    const { tech } = req.query

    const spots = await Spot.find({
      techs: { $regex: tech, $options: 'i' }
    }).sort({ price: 'asc' })

    return res.json(spots)
  }

  async store(req, res) {
    try {
      const { filename } = req.file
      const { company, techs, price } = req.body
      const { user_id } = req.headers

      const user = await User.findById(user_id)

      if (!user) {
        return res.status(400).json({ error: 'Usuário não existe' })
      }

      const spot = await Spot.create({
        user: user_id,
        thumbnail: filename,
        company,
        techs: techs.split(',').map(tech => tech.trim()),
        price
      })

      return res.json(spot)
    } catch (error) {
      return res.json({ error })
    }
  }
}

module.exports = new SpotController()
