const express = require('express');
const path = require('path');
const basicRouter = require('../routes/basic');
const app = express();

app.use('/data', express.static(path.resolve(__dirname, '../data')))
app.use(basicRouter);

module.exports = app;