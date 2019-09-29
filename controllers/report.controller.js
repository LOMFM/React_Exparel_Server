const PatientActivity = require('../models/patientActivity.model');
const TotalServiceStatus = require('../models/totalServiceStatus.model');
const LiveStatus = require('../models/liveStatus.model');
const TypeLive = require('../models/typeLive.model');
const TotalPlan = require('../models/totalPlan.model');
const TopPayer = require('../models/topPayer.model');
const Plan = require('../models/plan.model');
const Payer = require('../models/payer.model');
const Coalition = require('../models/coalition.model');
const Reimbursement = require('../models/reimbursement.model')


const patientReport = (req, res) => {

}

const patientStatisticReport = (req, res) => {

}

const patientTrendReport = (req, res) => {

}

const ascPayerCoverageReport = (req, res) => {

}

const hopdPayerCoverageReport = (req, res)=> {

}

const ascCommercialPlanReport = (req, res) => {

}

const ascMedicaidPlanReport = (req, res) => {

}

const hopdCommercialPlanReport = (req, res) => {

}

const hopdMedicaidPlanReport = (req, res) => {

}

const dentalReport = (req, res) => {

}

const dentalStatisticReport = (req, res) => {

}

const dentalCoverageReport = (req, res) => {

}

const dentalPlanReport = (req, res) => {

}

const inPatientReport = (req, res) => {

}

const inPatientStatisticReport = (req, res) => {

}

const inPatientListReport = (req, res) => {

}

module.exports = {
    patientReport,
    patientStatisticReport,
    patientTrendReport,
    ascPayerCoverageReport,
    ascCommercialPlanReport,
    ascMedicaidPlanReport,
    hopdPayerCoverageReport,
    hopdCommercialPlanReport,
    hopdMedicaidPlanReport,
    dentalReport,
    dentalStatisticReport,
    dentalCoverageReport,
    dentalPlanReport,
    inPatientReport,
    inPatientStatisticReport,
    inPatientListReport
}