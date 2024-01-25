
const config = require('./utils/config')
const express = require('express')
const application = express()
const bookRouter = require('./controllers/book_router')
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

application.use(cors())
application.use(express.json())
application.use(express.static('dist'))
application.use('/api/books', bookRouter)

module.exports = application