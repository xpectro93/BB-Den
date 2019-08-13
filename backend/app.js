const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const cors = require('cors');

//auth
const session = require('express-session');
const passport = require('./auth/local');


//route imports
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const likesRouter = require('./routes/likes');
const todosRouter = require('./routes/todos');


const app = express();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser('Scrambled words'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'Scrambled words',
    resave: false,
    saveUninitialized: true
  })
);

app.use(passport.initialize());
app.use(passport.session());




//routers use
app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);
app.use('/api/likes', likesRouter);
app.use('/api/todos', todosRouter);



// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
//
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json({
    message: err.message,
    error: err
  });
});



module.exports = app;
