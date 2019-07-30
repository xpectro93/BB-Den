const bcrypt = require("bcryptjs");

function comparePass(userPass, databasePass) {
  return bcrypt.compareSync(userPass, databasePass);
}

function createHash(password) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

function loginRequired(req, res, next) {
  console.log('test 3', req.user)
  if (!req.user) {
    res.status(401).json({ status: "Forbidden - please log in." });
    return;
  }
  next();
}

module.exports = {
  comparePass,
  createHash,
  loginRequired
};
