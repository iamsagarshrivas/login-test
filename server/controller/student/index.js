const router = require('express').Router();
const studentController = require('./student.controller');

router.get('/',studentController.getAllStudents)

module.exports = router;