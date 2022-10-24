const mongoose = require('mongoose')

const connect = mongoose.connect('mongodb+srv://Curso:10879121@cluster0.z3gf8.mongodb.net/BASE_EKICKY?retryWrites=true&w=majority')

module.exports = connect