const jsonServer = require('json-server');
const path = require('path');
const router = require('express').Router();
// const bodyParser = require('body-parser');
const jsonRouter = jsonServer.router(path.resolve(__dirname, '..', 'db.json'));
const middlewares = jsonServer.defaults();

router.use(middlewares);
router.use(jsonRouter);
router.get('*', (_, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Hello world!'
    });
});

module.exports = router;