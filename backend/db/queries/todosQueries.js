const { db } = require('./index.js');

// * `GET /todo/user/:id`
//   * `Get like by user id`
const getTodosByUser = (req, res, next) => {
  db.any(`SELECT username, userid, topic, header, body, completed, todo.created_at FROM todo JOIN users ON todo.userid = users.id WHERE users.id =${req.user}`)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        data:data,
        message: `Retreived todos for badger with id of ${req.user}`
      })
    })
    .catch(err => {
      console.log(err)
      next(err)})
}
// * `GET /todo/topic/:id`
//   * `Get todo by topic id`
const getTodosByTopic = ( req, res, next) => {
  let reqData = req.params.id

  db.any(`SELECT username, userid, topic, header, body, completed, todo.created_at FROM todo JOIN users ON todo.userid = users.id WHERE todo.topic =$1 AND users.id=${req.user}`, reqData)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        data:data,
        message: `Retreived todos for badger with id of ${reqData}`
      })
    })
    .catch(err => {
      console.log(err)
      next(err)})
    }


// * `POST /todo`
//   * `Post todo`
const postTodo = (req, res, next) => {
  db.one('INSERT INTO todo (userid, topic, header, body, completed) VALUES (${userid}, ${topic},${header},${body},${completed}) RETURNING id',req.body)
    .then(data => {
      res.status(200).json({
        status:'Success',
        data:data,
        message:'Created new Todo'
      })
    })
    .catch(err => {
      console.log(err)
      next(err)})
}
// * `PATCH /todo`
//   * `Update isFinished option`
const updateTodo = ( req,res, next ) => {
  let todo_id = parseInt(req.params.id)
  let queryString = '';
  for (let key in req.body) {
    if (key !== undefined) {
    queryString += key + "=${" + key + "}, "
    }
  }
  queryString = queryString.slice(0,-2);
  db.none('UPDATE todo SET '+ queryString +' WHERE id=' + todo_id, req.body)
    .then(() => {
      res.status(200).json({
        status: "Success",
        message: "Editted todo with Id: " + todo_id
      })
    })
    .catch(err => next(err));
}
// * `DELETE /todo/:id`
//   * `Delete todo`
const deleteTodo = ( req, res, next ) => {
  let todoId = parseInt(req.params.id);
  db.none('DELETE FROM todo WHERE id = $1', todoId)
  .then(() => {
    res.status(200).json({
      status: 'success',
      message: 'Todo deleted'
    })
  })
  .catch(err => next(err))
}

module.exports = {
  getTodosByUser,
  getTodosByTopic,
  postTodo,
  updateTodo,
  deleteTodo
}
