const express = require('express')

const errorRoute = require('./api/error.route');
const userRoute = require('./api/user.route');
const exparelRoute = require('./api/exparel.route');

const router = express.Router()

router.use('/error', errorRoute);
router.use('/user', userRoute);
router.use('/exparel', exparelRoute);

module.exports = router
