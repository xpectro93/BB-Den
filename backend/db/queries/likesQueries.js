const { db } = require('./index.js');


// * `GET /likes`
//   * `Get all likes`
const getAllLikes = ( req, res, next) => {
  db.any('SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id ORDER BY post_id DESC')
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
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.type = 'BOOK' ORDER BY post_id DESC")
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
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.type = 'MEME' ORDER BY post_id DESC")
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
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.type = 'VID' ORDER BY post_id DESC")
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
  db.any("SELECT likes.id AS post_id, userid,username, profile_pic, created_at, type, bookid, status, thumbnail, likeurl FROM likes JOIN users ON likes.userid = users.id WHERE likes.userid = $1 ORDER BY post_id DESC",userId)
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
// * `PATCH /:id`
//   * `update like(aimed for books)`
const updateBookStatus = ( req,res, next ) => {
  let like_id = parseInt(req.params.id)
  let queryString = '';
  for (let key in req.body) {
    if (key !== undefined) {
    queryString += key + "=${" + key + "}, "
    }
  }
  queryString = queryString.slice(0,-2);
  db.none('UPDATE likes SET '+ queryString +' WHERE id=' + like_id, req.body)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Editted badger with user Id: " + like_id
      })
    })
    .catch(err => next(err));
}

// * `DELETE /likes/:id`
//   * `Delete a like by id`
const deleteLike = ( req, res, next ) => {
  let submissionId = parseInt(req.params.id);
  db.none('DELETE FROM likes WHERE id = $1', submissionId)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Like deleted'
    })
  })
  .catch(err => next(err))
}

module.exports = {
  getAllLikes,
  getAllBookLikes,
  getAllMemeLikes,
  getAllVidLikes,
  getAllLikesByUserId,
  postLike,
  addBookToMyList,
  updateBookStatus,
  deleteLike
}
