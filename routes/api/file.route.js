const express = require('express');
const router = express.Router();

const fileController = require('../../controllers/file.controller')

router.get('/pdf/:name', fileController.getPDF)

module.exports = router