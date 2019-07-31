const express = require('express');
const router = express.router();
const {

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

// * `PATCH /:id`
//   * `update like(aimed for books)`
router.patch('/:id', updateBookStatus);


// * `DELETE /likes/:id`
//   * `Delete a like by id`
router.delete('/:id', deleteLike);
