const express = require('express')
const fs = require('fs')
const path = require('path')
const config = require('../config');
const router = express.Router()

const PDF_DIR = './reports/'
const APP_PATH = config.APP_PATH


const getPDF = (req, res) => {
	const filePath = PDF_DIR + req.params.name;

	if( fs.existsSync(filePath) ){
		// res.set('Content-Type', 'application/pdf');
		// console.log(__dirname);
		// return res.sendFile(APP_PATH + '/reports/' + req.params.name);
		res.download(path.join(__dirname, "../reports/" + req.params.name));
	}
	else {
		res.status(404).send({
			status: false,
			error: 'File does not exist'
		})
	}
}

module.exports = {
	getPDF
}