const router = require('express').Router();
const userRouter = require('./user/index');
const studentRouter = require('./student/index');

router.use('/user',userRouter);
router.use('/student',studentRouter);

module.exports = router;