const express = require('express');
const router = express.Router();

const exparelController = require('../../controllers/exparel.controller')

// First Page
router.get('/global-status', exparelController.getGlobalStatus);
router.post('/save-activity', exparelController.savePatientAcitivy);
router.get('/total-status', exparelController.getOverallStatus);
router.post('/save-total', exparelController.saveTotalServiceStatus);

router.get('/active-status/:page/:type', exparelController.getPageActiveStatus)
router.get('/total-status/:page', exparelController.getPageTotalStatus)

//Second Page
router.get('/live-status', exparelController.getLiveStatus)
router.post('/live-status', exparelController.saveLiveStatus)

// Third page
router.post('/get-active-status', exparelController.getOneActiveStatus)
router.post('/set-active-status/:type', exparelController.saveOneActiveStatus)
router.post('/get-total-status', exparelController.getOneTotalStatus)
router.post('/set-total-status/:type', exparelController.saveOneTotalStatus)
router.post('/get-live-status', exparelController.getOneLiveStatus)
router.post('/set-live-status/:type', exparelController.saveOneLiveStatus)

// Type means Service Type : ex) ASC, HOPD, Dental ..
// Category means Service Category : ex) Medicare, commercial, medicaid, VA/DOD ..
// Coalition means the Service Company: ex) United Health, 
// State means that State: ex) Califonia, ...

// Top Ten Data
router.get('/tops/:type', exparelController.getTopPayers)
router.get('/top/:id', exparelController.getOneTopPayer)
router.post('/create-tops', exparelController.createTopPayer)
router.put('/update-tops/:id', exparelController.updateTopPayer)

// Payer Data
router.get('/get-coalition-active/:type/:coalition', exparelController.getCoalitionActive)          // To display the States Popup for each coalition
router.get('/get-coalition-detail/:type/:coalition', exparelController.getCoalitionDetail)          // To display the Detail Popup for each coalition
router.get('/get-coalition-list/:type', exparelController.getCoalitionList)
router.get('/get-coalition/:id', exparelController.getCoalition)
router.post('/edit-coalition-detail/:type/:state/:coalition', exparelController.editCoalitionDetail)    // Save each coalition, state, service type data

// Reimbursement Data
router.get('/get-type-reimbursements/:type', exparelController.getTypeReimbursements);
router.get('/get-coalition-reimbursements/:type/:coalition', exparelController.getCoalitionReimbursements);
router.get('/get-reimbursement/:id', exparelController.getReimbursement);
router.post('/save-reimbursements/:type/:state/:coalition', exparelController.saveReimbursement);

// Plan Data
router.get('/get-plans/:type/:category', exparelController.getPlans)                // To display the plan table
router.get('/get-coalition-plans/:type/:category/:coalition', exparelController.getCoalitionPlans)  // To display the state popup for each coalition
router.post('/edit-plans/:type/:category', exparelController.editPlan) 

// Total Plan Data
router.get('/get-total-plan/:type/:category', exparelController.getTotalPlans);
router.post('/edit-total-plan/:type/:category', exparelController.editTotalPlans);

// Hospital Data
router.get('/get-hospital/:type/:category/:coalition', exparelController.getHospital);

// Coalitions
router.get('/get-coalitions', exparelController.getAllCoalitions);
router.post('/save-coalition', exparelController.saveCoalition);

module.exports = router;