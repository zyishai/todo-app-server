// const jsonServer = require('json-server');
// const path = require('path');
const router = require('express').Router();
const bodyParser = require('body-parser');
// const router = jsonServer.router(path.resolve(__dirname, '..', 'db.json'));

router.use(bodyParser.json());
router.get('/:message', (_, res) => {
    res.json({
        status: 'OK',
        message: 'Hello world!'
    });
});

module.exports = router;