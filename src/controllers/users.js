const User = require('../models/user');
const Book = require('../models/book')


const getUsers = (request, response) => {
    return User.find({}).then(
        (data) => { response.status(200).send(data) }
    )
}

const getUser = (request, response) => {
    const { user_id } = request.params;
    return User.findById(user_id).then(
        (user) => { response.status(200).send(user) }
    )
}

const createUser = (request, response) => {
    return User.create({ ...request.body }).then(
        (user) => { response.status(201).send(user) })
        .catch((error) => response.status(500).send(error.message))
}

const updateUser = (request, response) => {
    const { user_id } = request.params;
    return User.findByIdAndUpdate(user_id, { ...request.body }).then(
        (user) => { response.status(200).send(user) }
    )
}

const deleteUser = (request, response) => {
    const { user_id } = request.params;
    return User.findByIdAndDelete(user_id, { ...request.body }).then(
        (user) => { response.status(200).send("Success") }
    )
}

const getBooks = (request, response) => {
    return Book.find({}).then(
        (data) => { response.status(200).send(data) }
    )
}

const getBook = (request, response) => {
    const { id } = request.params;
    return Book.findById(id).then(
        (book) => { response.status(200).send(book) }
    )
}

const createBook = (request, response) => {
       return Book.create({ ...request.body }).then(
        (book) => { response.status(201).send(book) })
        .catch((error) => response.status(500).send(error.message))
}

const updateBook = (request, response) => {
    const {id } = request.params;
    return Book.findByIdAndUpdate(id, { ...request.body }).then(
        (book) => { response.status(200).send(book) }
    )
}

const deleteBook = (request, response) => {
    const { id } = request.params;
    return Book.findByIdAndDelete(id, { ...request.body }).then(
        (book) => { response.status(200).send("Success") }
    )
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    createBook
}