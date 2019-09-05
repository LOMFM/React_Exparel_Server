const express = require('express');
const router = express.Router();

const outPatientController = require('../../controllers/outPatient.controller')

// First Page
router.get('/global-status', outPatientController.getGlobalStatus);
router.post('/save-activity', outPatientController.savePatientAcitivy);
router.get('/total-status', outPatientController.getOverallStatus);
router.post('/save-total', outPatientController.saveTotalServiceStatus);

//Second Page
router.get('/live-status', outPatientController.getLiveStatus)
router.post('/live-status', outPatientController.saveLiveStatus)

module.exports = router;
