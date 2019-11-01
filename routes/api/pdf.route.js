const express = require('express');
const router = express.Router();

const reportController = require('../../controllers/report.controller')

router.post('/patient', reportController.patientReport)
router.post('/patient-statistic', reportController.patientStatisticReport)
router.post('/patient-trend', reportController.patientTrendReport)
router.post('/payer-coverage', reportController.payerCoverageReport)
router.post('/payer-coverage-detail', reportController.payerCoverageDetailReport)
router.post('/dental-payer-coverage-detail', reportController.dentalPayerCoverageDetailReport)
router.post('/payer-plan', reportController.payerPlanReport)
router.post('/payer-plan-detail', reportController.payerPlanDetailReport)
router.post('/dental-report', reportController.dentalReport)
router.post('/dental-statistic', reportController.dentalStatisticReport)
// router.post('/dental-coverage', reportController.dentalCoverageReport)
// router.post('/dental-plan', reportController.dentalPlanReport)
// router.post('/inpatient', reportController.inPatientReport)
router.post('/surgery-center', reportController.surgeryCenterReport)

module.exports = router