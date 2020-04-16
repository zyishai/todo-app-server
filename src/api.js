const serverless = require('serverless-http');
// const jsonServer = require('json-server');
const path = require('path');
// const router = jsonServer.router(path.resolve(__dirname, '..', 'db.json'));
// const middlewares = jsonServer.defaults({
//     static: path.resolve(__dirname, '../dist')
// });
const port = process.env.PORT || 3000;


// const server = jsonServer.create();

// server.use(middlewares);
const express = require('express');
const server = express();
const router = express.Router();
router.get('/', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Hello, world!'
    });
});
server.use('/.netlify/functions/api', router);

server.listen(port);

module.exports.handler = serverless(server);