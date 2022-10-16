const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const Car = mongoose.model('Car', CarSchema)

module.exports = Car