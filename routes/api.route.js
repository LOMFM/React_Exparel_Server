const express = require('express')

const errorRoute = require('./api/error.route');
const userRoute = require('./api/user.route');
const exparelRoute = require('./api/exparel.route');
const reportRoute = require('./api/pdf.route');
const fileRoute = require('./api/file.route');

const router = express.Router()

router.use('/error', errorRoute);
router.use('/user', userRoute);
router.use('/exparel', exparelRoute);
router.use('/report', reportRoute);
router.use('/file', fileRoute);

module.exports = router
