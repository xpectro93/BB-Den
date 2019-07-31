const { db } = require('./index.js');


// * `GET /books`
//   * `Get all books`
const getAllBooks =(req, res, next)=> {
  db.any('SELECT * FROM books')
    .then( data => {
      res.status(200).json({
        status:"Success",
        data:data,
        message:'Retrieved all books'
      });
    })
    .catch( err => next(err));
}

// * `GET /book/search/:id`
//   * `Get book based on title or author`
const searchForBook = (req, res, next) => {
  let searchQuery = req.params.id.toLowerCase()
  db.any(`SELECT * FROM books WHERE title LIKE '%${searchQuery}%' OR author LIKE '%${searchQuery}%'`)
  .then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "Here is what we found"
    });
  })
  .catch(err => next(err));
}

// * `POST /books/mylist/`
//   * `Adds new Book to user's list`

// const addBookToMyList = ( req, res, next) => {
//   let insertObj = {
//     userid:req.body.useid,
//     type:'BOOK',
//     bookid:req.body.bookid,
//     status:'READ',
//     thumbnail:req.body.thumbnail,
//     likeurl: NULL
//   }
//   db.none('INSERT INTO likes (userid, type, bookid, status, thumbnail, likeurl) VALUES(${userid}, ${type}, ${bookid},${status},${thumbnail}, ${likeurl})',insertObj)
//     .then(() => {
//       res.status(200).json({
//         message:'Book added to list'
//       })
//     })
//     .catch(err => next(err));
// }


// * `POST /book/list`
//   * `Add new book to list`
const addBook = (req, res, next) => {
  db.one('INSERT INTO books (title, author, cover_pic) VALUES (${title},${author},${cover_pic}) RETURNING id',req.body)
    .then(data => {
      res.status(200).json({
        status:'Success',
        data:data,
        message:'Book has been added'
      })
    })
    .catch(err => next(err))
}

module.exports = {
  getAllBooks,
  searchForBook,
  addBook
}
