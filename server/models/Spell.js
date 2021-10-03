const mongoose = require('mongoose')
const { Schema } = mongoose

// TODO: prototype is not defined

const Spell = new Schema({
  name: String
  // bookID: JSON
})

module.exports = mongoose.model('Spell', Spell)
