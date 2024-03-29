const { Booking } = require('../models')

class BookingController {
  async store(req, res) {
    try {
      const { user_id } = req.headers
      const { spot_id } = req.params
      const { date } = req.body

      const booking = await Booking.create({
        user: user_id,
        spot: spot_id,
        date
      })

      await booking
        .populate('spot')
        .populate('user')
        .execPopulate()

      return res.json(booking)
    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}

module.exports = new BookingController()
