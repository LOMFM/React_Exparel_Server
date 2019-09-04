const express = require('express')

// const user = require('/web/user')

const router = express.Router()

router.use('/user', (req, res) => {
    res.render('user', {title: "Profile"})
})

module.exports = router
