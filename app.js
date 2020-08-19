const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./feature/index/route/index');
const emreRouter = require('./feature/index/route/emreRouter');

const app = express();

app.disable('etag'); // TODO emreakcadag araştır.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/emre', emreRouter);

module.exports = app;
