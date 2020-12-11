const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PuzzleSchema = new Schema({
    title: String,
    difficulty: String,
    description: String,
})

module.exports = mongoose.model('Puzzles',PuzzleSchema)