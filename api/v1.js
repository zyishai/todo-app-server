const jsonServer = require('json-server');
const path = require('path');
const router = jsonServer.router(path.resolve(__dirname, '..', 'db.json'));

module.exports = router;