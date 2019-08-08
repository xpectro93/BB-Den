const express = require('express');
const router = express.Router();
const {
    getTodosByUser,
    getTodosByTopic,
    postTodo,
    updateTodo,
    deleteTodo
} = require('../db/queries/todosQueries.js');


// * `GET /todo/user/:id`
//   * `Get like by user id`
// * `GET /todo/topic/:id`
//   * `Get todo by topic id`
// * `POST /todo`
//   * `Post todo`
// * `PUT /todo`
//   * `Update isFinished option`
// * `DELETE /todo/:id`
//   * `Delete todo`

module.exports = router;
