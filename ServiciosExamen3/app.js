var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')

const databaseUrl = "mongodb://localhost:27017/appDatabase"
const databaseOptions = {
    useNewUrlParser : true
};

// try {
//   const redis = require('redis');
//   client = redis.createClient();

//   const util = require('util');
//   client.get = util.promisify(client.get);
//   console.log("Redis Conectado");
// } catch (error) {
//   console.log("Redis no Conectado");
// }

mongoose.connect(databaseUrl, databaseOptions);
mongoose.connection.on("open", function(){
    console.log("MongoDB connection openned");
});

var indexRouter = require('./routes/index');

var servicesRouter = require('./routes/services');
var authRouter = require('./routes/auth.routes');
var citasRouter = require('./routes/citas')
var usersRouter = require('./routes/users')



var app = express();

app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/services', servicesRouter);
app.use('/citas', citasRouter);
app.use('/Login', authRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
  console.log(err);
});

module.exports = app;
