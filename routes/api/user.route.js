const express = require('express');

const router = express.Router()
const { catchError } = require('../../controllers/error')
const UserController = require('../../controllers/user.controller');

router.get('/login', catchError(UserController.login))
router.get('/register', catchError(UserController.register))
router.get('/update_profile', catchError(UserController.updateProfile))
router.get('/forgot-password', catchError(UserController.generateResetCode))
router.get('/reset-password', catchError(UserController.resetPassword))

module.exports = router
