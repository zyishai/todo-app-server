const serverless = require('serverless-http');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('../db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use('/.netlify/functions/server', router);
server.use(router);

server.listen(port);

module.exports.handler = serverless(server);