const express = require('express');
const router = express.Router();
const {
        getAllUsers,
        getAUser,
        createUser,
        loginUser,
        isLoggedIn,
        logoutUser,
        updateUser
      } = require('../db/queries/usersQueries.js');

const passport = require("../auth/local");
const { loginRequired } = require("../auth/helpers");



router.get("/isLoggedIn", isLoggedIn);

// * `GET /api/users/:id`
//   * Get user based on id
router.get('/:id',getAUser);

// * `GET /api/users`
//   * Get all users
router.get('/', getAllUsers);

// // * `POST /api/users`
// //   * Create a new user
router.post('/new', createUser);

router.post("/logout", loginRequired, logoutUser);

router.post("/login", passport.authenticate("local", {}), loginUser);

// // * `PATCH /api/users/:user_id`
// //   * Update a specific user
router.patch('/:id', updateUser);

module.exports = router;
