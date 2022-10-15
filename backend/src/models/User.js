const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, minlength: 6, maxlength: 100 },
    password: { type: String, required: true, minlength: 3, maxlength: 200 },
    createAt: { type: Date, default: Date.now() }
})

const User = mongoose.model('User', userSchema)

module.exports = User