const express = require('express');
const router = express.Router();
const {
        getAllBooks,
        searchForBook,
        addBook
      } = require('../db/queries/booksQueries.js');


;
//this is a test
// * `GET /book/search/:id`
//   * `Get book based on title or author`
router.get('/search/:id', searchForBook);

// * `GET /books`
//   * `Get all books`
router.get('/',getAllBooks)

// * `POST /books/mylist/`
//   * `Adds new Book to user's list`

// * `POST /book/list`
//   * `Add new book to list`
router.post('/', addBook)


module.exports = router;
