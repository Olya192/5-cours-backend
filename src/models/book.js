const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        minLength: 2
    },
    author: {
        type: String,
        require: true,
        minLength: 2
    },
    year: {
        type: Number,
        require: true,
        minLength: 3
    }

})

module.exports = mongoose.model('book',bookSchema)