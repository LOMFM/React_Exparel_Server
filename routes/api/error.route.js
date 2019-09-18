const express = require('express');

var router = express.Router()

router.get('/404', (req, res) => {
    res.status(404).send({
        code: 'Not_Found',
        message: 'Can not find the route.'
    })
})

router.get('/400', (req, res) => {
    res.status(400).send({
        code: 'Empty_Data',
        message: 'There is no data'
    })
})

router.get('/500', (req, res) => {
    res.status(500).send({
        code: 'Internal_Server_Error',
        message: 'There is error in the db connection.'
    })
})

module.exports = router