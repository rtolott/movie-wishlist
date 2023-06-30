const express = require('express');
const listsRouter = require('./routes/listsRouter');
const usersRouter = require('./routes/usersRouter');
const moviesRouter = require('./routes/moviesRouter');

const app = express();

app.use(express.json());
app.use(listsRouter);
app.use(usersRouter);
app.use(moviesRouter);

module.exports = app;