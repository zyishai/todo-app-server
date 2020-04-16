const serverless = require('serverless-http');
const jsonServer = require('json-server');
const path = require('path');
const router = jsonServer.router(path.resolve(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

const express = require('express');
const server = express();
server.use(express.static(path.resolve(__dirname, '../public')));
router.use(express.static(path.resolve(__dirname, '../public')));
server.use('/.netlify/functions/api', router);

server.listen(port);

module.exports.handler = serverless(server);