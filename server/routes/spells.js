const express = require('express')
const router = express.Router()

// TODO: create API

const Spell = require('../models/Spell')

router.get('/', async (req, res) => {
  res.json(await Spell.find())
})

router.post('/', async (req, res) => {
  const book = new Spell(req.body)
  await book.save()
  res.json({ state: 'success' })
})

router.get('/:id', async (req, res) => {
  res.json(await Spell.findById(req.params.id))
})

router.put('/:id', async (req, res) => {
  await Spell.findByIdAndUpdate(req.params.id, req.body)
  res.json({ state: 'updated' })
})

router.delete('/:id', async (req, res) => {
  await Spell.findByIdAndRemove(req.params.id)
  res.json({ state: 'deleted' })
})

module.exports = router
