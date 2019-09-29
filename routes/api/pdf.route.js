const express = require('express');
const router = express.Router();

const reportController = require('../../controllers/report.controller')

router.post('/patient', reportController.patientReport)
router.post('/patient-statistic', reportController.patientStatisticReport)
router.post('/patient-trend', reportController.patientTrendReport)
router.post('/asc-coverage', reportController.ascPayerCoverageReport)
router.post('/hopd-coverage', reportController.hopdPayerCoverageReport)
router.post('/asc-commercial-plan', reportController.ascCommercialPlanReport)
router.post('/asc-medicaid-plan', reportController.ascMedicaidPlanReport)
router.post('/hopd-commercial-plan', reportController.ascMedicaidPlanReport)
router.post('/hopd-medicaid-plan', reportController.hopdMedicaidPlanReport)
router.post('/dental-report', reportController.dentalReport)
router.post('/dental-statistic', reportController.dentalStatisticReport)
router.post('/dental-coverage', reportController.dentalCoverageReport)
router.post('/dental-plan', reportController.dentalPlanReport)
router.post('/inpatient', reportController.inPatientReport)
router.post('/inpatient-statistic', reportController.inPatientStatisticReport)
router.post('/inpatient-list', reportController.inPatientListReport)

module.exports = router