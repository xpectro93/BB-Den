const express = require('express');
const router = express.Router();
const {
    getTodosByUser,
    getTodosByTopic,
    postTodo,
    updateTodo,
    deleteTodo
} = require('../db/queries/todosQueries.js');

// * `GET /todo/topic/:id`
//   * `Get todo by topic id`
router.get('/topic/:id', getTodosByTopic);

// * `GET /todo/user/:id`
//   * `Get like by user id`
router.get('/', getTodosByUser);

// * `POST /todo`
//   * `Post todo`
router.post('/',postTodo);

// * `PATCH /todo`
//   * `Update isFinished option`
router.patch('/:id',updateTodo);

// * `DELETE /todo/:id`
//   * `Delete todo`
router.delete('/:id',deleteTodo);

module.exports = router;
