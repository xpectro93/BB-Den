const passport = require("passport");
//check folder path
const LocalStrategy = require("passport-local").Strategy;
const init = require("./passport");
const helpers = require("./helpers");
const {db} = require("../db/queries/index.js")

passport.use(

  new LocalStrategy((username, password, done) => {
    // console.log('local username,pass,done',username,password)
    db.one("SELECT * FROM users WHERE username = ${username}", {
      username: username
    }).then(user => {
        // console.log('user at local',user)

        if (!helpers.comparePass(password, user.password_digest)) {
          return done(null, false);
        } else {
          // console.log('local user at done', user)
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

init();


module.exports = passport;
