require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./app/routes')

const databaseConfig = require('./config/database')

class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE_ENV === 'development'
    this.database()
    this.middlewares()
    this.routes()
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes() {
    this.express.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    )
    this.express.use(routes)
  }
}

module.exports = new App().express
