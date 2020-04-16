const express = require('express');
const basicRouter = require('../routes/basic');
const app = express();

app.use(basicRouter);

module.exports = app;