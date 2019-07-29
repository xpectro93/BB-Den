#API Endpoints

## HTML API

### ROOT
* `GET /`
  * loads the React web app

## JSON API

### USERS
* `GET /users`
  * Get all users
* `GET /users/:id`
  * Get user based on id
* `POST /users`
  * Create a new user
* `PATCH /users/:user_id`
  * Update a specific user

###  BOOK
* `GET /books`
  * `Get all books`
* `GET /book/search/:id`
  * `Get book based on title or author`
* `POST /books/mylist/`
  * `Adds new Book to user's list`
* `POST /book/list`
  * `Add new book to list`

### LIKES
* `GET /likes`
  * `Get all likes`
* `GET /likes/books`
  * `Get book likes`
* `GET /likes/memes`
  * `Get meme likes`
* `GET /likes/vid`
  * `Get vid likes`
* `GET /likes/:id`
  * `Get likes by user`
* `POST /likes`
  * `Post a like`
* `DELETE /likes/:id`
  * `Delete a like by id`

### TODO
* `GET /todo/user/:id`
  * `Get like by user id`
* `GET /todo/topic/:id`
  * `Get todo by topic id`
* `POST /todo`
  * `Post todo`
* `PUT /todo`
  * `Update isFinished option`
* `DELETE /todo/:id`
  * `Delete todo`

### MESSAGES
* formspree.io
