const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const redirectRouter = require('./routes/redirect');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/frontend/build')));

app.use('/api/', apiRouter);
app.use('/', indexRouter);
app.use('*', redirectRouter);

module.exports = app;
