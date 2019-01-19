const cookieParser = require('cookie-parser');
const express = require('express');
const httpErrors = require('http-errors');
const logger = require('morgan');
const { format: { combine, timestamp, printf }, transports } = require('winston');
const expressWinston = require('express-winston');
const sassMiddleware = require('node-sass-middleware');
const path = require('path');

const indexRouter = require('./routes/index');
const newsRouter = require('./routes/news');

const app = express();

// winston logger
const myFormat = printf(info => `Date: [${info.timestamp}] ${info.level}: ${info.message}`);

const winstonLogger = expressWinston.logger({
  format: combine(
    timestamp(),
    myFormat,
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});

app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(winstonLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/news', newsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
