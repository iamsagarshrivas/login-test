const router = require('express').Router();
const apiRouter = require('../controller/index');

router.use('/api',apiRouter)

module.exports = router;