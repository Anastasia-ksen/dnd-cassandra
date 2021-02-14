const mongoose = require('mongoose');
const {Schema} = mongoose;

const Book = new Schema({
    name: String,
    author: String,
    isOfficial: Boolean,
    edition: String
});

module.exports = mongoose.model('Book', Book);