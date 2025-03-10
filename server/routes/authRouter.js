const express = require('express')
const { models } = require('mongoose')
const { singupValidation, loginValidation } = require('../middleware/authValidation')
const { singup, login } = require('../controller/authcontroller')
const router = express.Router()



router.post('/singup',singupValidation,singup)
router.post('/login',loginValidation,login)

module.exports = router