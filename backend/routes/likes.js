const express = require('express');
const router = express.Router();
const {
        getAllLikes,
        getAllBookLikes,
        getAllMemeLikes,
        getAllVidLikes,
        getAllLikesByUserId,
        postLike,
        addBookToMyList,
        // updateBookStatus,
        // deleteLike
      } = require('../db/queries/likesQueries.js');


// * `GET /likes`
//   * `Get all likes`
router.get('/', getAllLikes);

// * `GET /likes/books`
//   * `Get book likes`
router.get('/books', getAllBookLikes);

// * `GET /likes/memes`
//   * `Get meme likes`
router.get('/memes', getAllMemeLikes);

// * `GET /likes/vid`
//   * `Get vid likes`
router.get('/vids', getAllVidLikes);

// * `GET /likes/:id`
//   * `Get likes by user`
router.get('/:id', getAllLikesByUserId);

// * `POST /likes`
//   * `Post a like`
router.post('/', postLike);


// * `POST /likes/books`
//   * `add book to user's list`
router.post('/books', addBookToMyList);

// * `PATCH /:id`
//   * `update like(aimed for books)`
// router.patch('/:id', updateBookStatus);


// * `DELETE /likes/:id`
//   * `Delete a like by id`
// router.delete('/:id', deleteLike);

module.exports = router
