const { db } = require('./index.js');
const authHelpers = require("../../auth/helpers");

// * `GET /api/users/:id`
//   * Get user based on id
const getAUser = (req, res, next) => {
  let userId = req.params.id
  db.one('SELECT id, username, profile_pic FROM users WHERE id=$1',userId)
    .then(data => {
      res.status(200)
      .json({
        status:'Success',
        message:'Retrieved Badger: ', userId,
        user:data
      })
    })
    .catch(err => {
      console.log(err)
      next(err)})
}

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
  .catch(err => {
    console.log(err)
    next(err)})
}

// * `POST /api/users`
//   * Create a new user
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
      console.log(err)
      next(err)})
}

//POST /api/user/logout
const  logoutUser = (req, res, next) => {
  req.logout();
  res.status(200).send("log out success");
}

//POST /api/users/login
const loginUser = (req, res)=> {
  res.json(req.user);
}

//GET /api/users/isLoggedIn
const isLoggedIn = (req, res) => {

  if (req.user) {
    res.json({ id: req.user });
  } else {
    res.json({ id: null });
  }
}

// * `PATCH /api/users/:user_id`
//   * Update a specific user
const updateUser = (req, res, next) => {
  let user_id = parseInt(req.params.id)
  let queryString = '';
  for (let key in req.body) {
    if (key !== undefined) {
    queryString += key + "=${" + key + "}, "
    }
  }
  queryString = queryString.slice(0,-2);
  db.none('UPDATE users SET '+ queryString +' WHERE id='+user_id, req.body)
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Editted badger with user Id: "+user_id
      })
    })
    .catch(err => next(err));
}


module.exports = {
  getAUser,
  getAllUsers,
  createUser,
  logoutUser,
  loginUser,
  isLoggedIn,
  updateUser
}
