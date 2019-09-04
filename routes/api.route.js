const express = require('express')

const errorRoute = require('./api/error.route');
const userRoute = require('./api/user.route');
const outPatientRoute = require('./api/outPatient.route');

const router = express.Router()

router.use('/error', errorRoute);
router.use('/user', userRoute);
router.use('/out-patient', outPatientRoute);

module.exports = router
