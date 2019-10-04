const multer = require('multer')
const uploadConfig = require('../../config/upload')

const upload = multer(uploadConfig)

module.exports = upload
