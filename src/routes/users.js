const router = require('express').Router();
const {getUsers, getUser, createUser, updateUser, deleteUser, getBooks, getBook, updateBook, deleteBook, createBook } = require('../controllers/users')



router.get('/users', getUsers);
router.get('/users/:user_id', getUser);
router.post('/users', createUser);
router.patch('/users/:user_id', updateUser);
router.delete('/users/:user_id', deleteUser);
router.get('/books', getBooks);
router.post('/books', createBook);
router.get('/books/:id', getBook);
router.patch('/books/:id', updateBook);
router.delete('/users/:id', deleteBook);



module.exports = router;