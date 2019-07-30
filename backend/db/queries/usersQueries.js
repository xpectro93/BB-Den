const { db } = require('./index.js');
const authHelpers = require("../../auth/helpers");

// * `GET /api/users/:id`
//   * Get user based on id
// const getAUser = (req, res, next) => {
//   db.one('')
// }

// * `GET /api/users`
//   * Get all users
const getAllUsers = (req, res, next) => {
  db.any('SELECT id, username, profile_pic FROM users')
  .then(data => {
    res.status(200).json({
      status: "Success",
      data: data,
      message: "Received all Badgers"
    });
  })
  .catch(err => next(err));
}

// * `POST /api/users`
//   * Create a new user
// router.post('/', createUser);
const createUser =(req, res, next)=> {
  const hash = authHelpers.createHash(req.body.password_digest);
  db.none(
    "INSERT INTO users (username, password_digest, profile_pic) VALUES (${username}, ${password_digest}, ${profile_pic})",
    { username: req.body.username, password_digest: hash, profile_pic:req.body.profile_pic})
    .then(() => {
      res.status(200).json({
        message: "New Badger has enterered the burrow succesfully."
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err
      });
    });
}

const  logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

const loginUser = (req, res)=> {
  res.json(req.user);
}

const isLoggedIn = (req, res) => {

  if (req.user) {
    res.json({ id: req.user });
  } else {
    res.json({ id: null });
  }
}

// * `PATCH /api/users/:user_id`
//   * Update a specific user
// router.patch('/:id', updateUser);

module.exports = {
  getAllUsers,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn
}
