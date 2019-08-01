const { db } = require('./index.js');


// * `GET /likes`
//   * `Get all likes`
const getAllLikes = ( req, res, next) => {
  db.any('SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id')
    .then( data => {
      res.status(200).json({
        status:'Success',
        data:data,
        message:'Retrieved all likes'
      })
    })
    .catch( err => next(err))
}
// * `GET /likes/books`
//   * `Get book likes`
const getAllBookLikes = ( req, res, next) => {
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.type = 'BOOK'")
    .then( data => {
      res.status(200).json({
        status:'Success',
        data:data,
        message:'All books gotten'
      })
    })
    .catch( err => next(err));
}

// * `GET /likes/memes`
//   * `Get meme likes`
const getAllMemeLikes = ( req, res, next) => {
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.type = 'MEME'")
    .then( data => {
      res.status(200).json({
        status:"Success",
        data:data,
        message:'All MeMes Gottt'
      })
    })
    .catch( err => next(err))
}

// * `GET /likes/vid`
//   * `Get vid likes`
const getAllVidLikes = ( req, res, next) => {
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.type = 'VID'")
    .then( data => {
      res.status(200).json({
        status:"Success",
        data:data,
        message:'All MeMes Gottt'
      })
    })
    .catch( err => next(err))
}

// * `GET /likes/:id`
//   * `Get likes by user`
const getAllLikesByUserId = ( req, res, next) => {
  let userId = req.params.id;
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.userid = $1",userId)
    .then( data => {
      res.status(200).json({
        status:"Success",
        data:data,
        message:`Posts by ${userId} have been retrieved`,

      })
    })
    .catch( err => next(err))
}

// * `POST /likes`
//   * `Post a like`
const postLike = (req, res, next) => {

  console.log('here');
  db.one('INSERT INTO likes (userid, type,status,thumbnail,likeurl) VALUES (${userid}, ${type},${status},${thumbnail},${likeurl}) RETURNING id',req.body)
    .then(data => {
      res.status(200).json({
        status:'Success',
        data:data,
        message:'Test'
      })
    })
    .catch(err => {
      console.log(err)
      next(err)})
}
// * `POST /books/mylist/`
//   * `Adds new Book to user's list`
const addBookToMyList = ( req, res, next) => {
  let insertObj = {
    userid:req.user,
    type:'BOOK',
    bookid:req.body.bookid,
    status:'READ',
    thumbnail:req.body.thumbnail,
    likeurl: NULL
  }
  db.none('INSERT INTO likes (userid, type, bookid, status, thumbnail, likeurl) VALUES(${userid}, ${type}, ${bookid},${status},${thumbnail}, ${likeurl})',insertObj)
    .then(() => {
      res.status(200).json({
        message:'Book added to list'
      })
    })
    .catch(err => next(err));
}

// * `DELETE /likes/:id`
//   * `Delete a like by id`

module.exports = {
  getAllLikes,
  getAllBookLikes,
  getAllMemeLikes,
  getAllVidLikes,
  getAllLikesByUserId,
  postLike,
  addBookToMyList,
  // updateBookStatus,
  // deleteLike
}
