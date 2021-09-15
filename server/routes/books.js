const express = require('express')
const router = express.Router()

const Book = require('../models/Book')

router.get('/', async (req, res) => {
  res.json(await Book.find())
})

router.post('/', async (req, res) => {
  const book = new Book(req.body)
  await book.save()
  res.json({ state: 'success' })
})

router.get('/:id', async (req, res) => {
  res.json(await Book.findById(req.params.id))
})

router.put('/:id', async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body)
  res.json({ state: 'updated' })
})

router.delete('/:id', async (req, res) => {
  await Book.findByIdAndRemove(req.params.id)
  res.json({ state: 'deleted' })
})

module.exports = router
