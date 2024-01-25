const requestRouter = require('express').Router()
const Book = require('../models/bookSchema')


requestRouter.get('/', (request, response) => {
    Book
      .find({})
      .then(books => {
        response.json(books)
      })
  })
  
  requestRouter.post('/', (request, response) => {
    const book = new Book(request.body)
  
    book
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

  module.exports = requestRouter