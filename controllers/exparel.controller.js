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


const mongoose = require('mongoose');

const getGlobalStatus = (req, res) => {
    PatientActivity.find({ page: "patient" }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: "DB_Get_Error",
                message: 'Getting Global Status data from DB.',
                error: err
            })
            return;
        }
        res.json({
            status: true,
            data: data
        })
    })
}

const savePatientAcitivy = (req, res) => {
    const { page, category, type, total, deactive, active, pending } = req.body
    PatientActivity.findOne({ type: type, page: page, category: category }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Activity data from DB.',
                error: err
            })
            return;
        }

        if (!data) {
            var activity = new PatientActivity();
            activity.page = page;
            activity.category = category;
            activity.type = type;
            activity.total = total;
            activity.deactive = deactive;
            activity.active = active;
            activity.pending = pending

            activity.save((err) => {
                if (err) {
                    res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the activity.',
                        error: err
                    })
                    return;
                }
                res.json({
                    status: true,
                    data: activity
                })
            })
        }
        else {
            data.total = total;
            data.deactive = deactive;
            data.active = active;
            data.pending = pending

            data.save((err) => {
                if (err) {
                    res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Creating the activity.',
                        error: err
                    })
                    return;
                }
                res.json({
                    status: true,
                    data: data
                })
            })
        }
    })
}


const getOverallStatus = (req, res) => {
    TotalServiceStatus.find({ page: "patient" }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: "DB_Get_Error",
                message: 'Getting Global Status data from DB.',
                error: err
            })
            return;
        }
        res.json({
            status: true,
            data: data
        })
    })
}

const saveTotalServiceStatus = (req, res) => {
    const { page, category, type, total, asc, hopd } = req.body;
    TotalServiceStatus.findOne({ page: page, category: category, type: type }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Status data from DB.',
                error: err
            })
            return;
        }
        if (!data) {
            var status = new TotalServiceStatus();
            status.page = page
            status.category = category
            status.type = type
            status.total = total
            status.asc = asc
            status.hopd = hopd
            status.dental_flag = false
            status.dental = 0

            status.save((err) => {
                if (err) {
                    res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the status data into DB.',
                        error: err
                    })
                }
                else {
                    res.json({
                        status: true,
                        data: status
                    })
                }
            })
        }
        else {
            data.total = total
            data.asc = asc
            data.hopd = hopd
            data.dental_flag = false
            data.dental = 0

            data.save((err) => {
                if (err) {
                    res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Inserting the status data into DB.',
                        error: err
                    })
                }
                else {
                    res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
    })
}

const getLiveStatus = (req, res) => {
    LiveStatus.find({ page: "patient" }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: "DB_Get_Error",
                message: 'Getting Global Status data from DB.',
                error: err
            })
            return;
        }
        res.json({
            status: true,
            data: data
        })
    })
}

const saveLiveStatus = (req, res) => {
    const { page, total, asc, hopd, _id } = req.body
    LiveStatus.findOne({ _id: _id }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Status data from DB.',
                error: err
            })
            return;
        }
        if (!data) {
            var status = new LiveStatus();
            status.page = page
            status.total = total
            status.asc = asc
            status.hopd = hopd

            status.save((err) => {
                if (err) {
                    res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the status data into DB.',
                        error: err
                    })
                }
                else {
                    res.json({
                        status: true,
                        data: status
                    })
                }
            })
        }
        else {
            data.total = total
            data.asc = asc
            data.hopd = hopd

            data.save((err) => {
                if (err) {
                    res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Inserting the status data into DB.',
                        error: err
                    })
                }
                else {
                    res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
    })// const save
}


const getPageActiveStatus = (req, res) => {
    const page = req.params.page;
    const type = req.params.type;

    PatientActivity.find({ page: page, type: type }, (err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting Activity data Error",
                error: err
            })
        }
        else {
            return res.json({
                status: true,
                data: data
            })
        }
    })
}

const getPageTotalStatus = (req, res) => {
    const page = req.params.page;

    TotalServiceStatus.find({ page: page, type: '' }, (err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting Activity data Error",
                error: err
            })
        }
        else {
            return res.json({
                status: true,
                data: data
            })
        }
    })
}

const getOneActiveStatus = (req, res) => {
    const { page, category, type } = req.body

    PatientActivity.findOne({
        page: page,
        category: category,
        type: type
    }, (err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting Activity data Error",
                error: err
            })
        }
        else {
            return res.json({
                status: true,
                data: data
            })
        }
    })
}

const getOneTotalStatus = (req, res) => {
    const { page, category, type } = req.body

    TotalServiceStatus.findOne({
        page: page,
        category: category,
        type: type
    }, (err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting Total Status data Error",
                error: err
            })
        }
        else {
            return res.json({
                status: true,
                data: data
            })
        }
    })
}

// To get the live status data : corresponding to the bar chart component on the third page.
const getOneLiveStatus = (req, res) => {
    const {type} = req.body;
    TypeLive.findOne({type: type}, (err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the data from DB.",
                error: err
            })
        }
        if( data ){
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

// Save the one active status data : corresponding to the first doughnut chart on the third page
const saveOneActiveStatus = (req, res) => {
    const page = req.params.type
    const reqData = req.body
    const category = req.body.category ? req.body.category : ''
    const type = req.body.type ? req.body.type.type: ''
    PatientActivity.findOne({page: page, category: category, type: type}, (err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Total Service data for all state.",
                error: err
            })
        }
        if( data ){
            for( let key in reqData ){
                data[key] = reqData[key]
            }
            data.save((err) => {
                if( err ){
                    return res.status(500).json({
                        code: "DB_Update_Error",
                        message: "Updating the Active data for all state.",
                        error: err
                    })
                }
                else{
                    return res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
        else {
            var newData = new PatientActivity()
            newData.page = page;
            for( let key in reqData ){
                newData[key] = reqData[key]
            }
            newData.save((err) => {
                if( err ){
                    return res.status(500).json({
                        code: "DB_Insert_Error",
                        message: "Inserting the Patient Activity data for all state.",
                        error: err
                    })
                }
                else{
                    return res.json({
                        status: true,
                        data: newData
                    })
                }
            })
        }
    })
}

// Save the one tatal status of each service type : corresponding to the second doughnut chart on the thrid page
const saveOneTotalStatus = (req, res) => {
    const page = req.params.type
    const totalStatus = req.body
    const category = req.body.category ? req.body.category : ''
    const type = req.body.type ? req.body.type.type: ''
    TotalServiceStatus.findOne({page: page, category: category, type: type}, (err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Total Service data for all state.",
                error: err
            })
        }
        if( data ){
            for( let key in totalStatus ){
                data[key] = totalStatus[key]
            }
            data.save((err) => {
                if( err ){
                    return res.status(500).json({
                        code: "DB_Update_Error",
                        message: "Updating the Total Service data for all state.",
                        error: err
                    })
                }
                else{
                    return res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
        else {
            var newData = new TotalServiceStatus()
            newData.page = page;
            for( let key in totalStatus ){
                newData[key] = totalStatus[key]
            }
            newData.save((err) => {
                if( err ){
                    return res.status(500).json({
                        code: "DB_Insert_Error",
                        message: "Inserting the Total Service data for all state.",
                        error: err
                    })
                }
                else{
                    return res.json({
                        status: true,
                        data: newData
                    })
                }
            })
        }
    })
}
// Save the live status data : correspondign to the bar chart component on the third page.
const saveOneLiveStatus = (req, res) => {
    const type = req.params.type
    const liveStatus = req.body
    TypeLive.findOne({type: type}, (err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Live data for all state.",
                error: err
            })
        }
        if( data ){
            for( let key in liveStatus ){
                data[key] = liveStatus[key]
            }
            data.save((err) => {
                if( err ){
                    return res.status(500).json({
                        code: "DB_Update_Error",
                        message: "Updating the Live data for all state.",
                        error: err
                    })
                }
                else{
                    return res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
        else {
            var newData = new TypeLive()
            newData.type = type;
            for( let key in liveStatus ){
                newData[key] = liveStatus[key]
            }
            newData.save((err) => {
                if( err ){
                    return res.status(500).json({
                        code: "DB_Insert_Error",
                        message: "Inserting the Live data for all state.",
                        error: err
                    })
                }
                else{
                    return res.json({
                        status: true,
                        data: newData
                    })
                }
            })
        }
    })
}

// Get the Top Payers 
const getTopPayers = (req, res) => {
    const type = req.params.type;

    var query = TopPayer.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer"   },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }, 
        {$match: {"type" : type}}])
    query.exec((err, data) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Payer Detail data for all state.",
                error: err
            })
        }
        if( data ){
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

// Get one Top Payer Information
const getOneTopPayer = (req, res) => {
    const id = req.params.id;
    var query = TopPayer.findById(id);
    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Payer Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

// Create One Top Payer Infomation
const createTopPayer = (req, res) => {
    const data = req.body

    var topPayer = new TopPayer()
    for (key in data) {
        topPayer[key] = data[key]
    }
    topPayer.save((err) => {
        if (err) {
            return res.status(500).json({
                code: 'DB_Insert_Error',
                message: 'Inserting the Top Payer data into DB.',
                error: err
            })
        }
        else {
            return res.json({
                status: true,
                data: topPayer
            })
        }
    })
}

// Update One Top Payer Information
const updateTopPayer = (req, res) => {
    const id = req.params.id;
    const data = req.body

    TopPayer.findById(id, (err, topPayer) => {
        if( err ){
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Top Payer data from DB",
                error: err
            })
        }
        if( data) {
            for (key in data) {
                topPayer[key] = data[key]
            }
            topPayer.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Inserting the Top Payer data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: topPayer
                    })
                }
            })
        }
        else{
            return res.status(500).json({
                code: 'DB_Get_Error',
                message: 'There is no data.',
            })
        }
    })
    
}

// Payer Data
/**
 * Activation percentage data of all US States : corresponding to the State maps
 * @param {*} req 
 * @param {*} res 
 */
const getCoalitionActive = (req, res) => {
    const type = req.params.type;
    const coalition = req.params.coalition;

    var query = Payer.find({ type: type, coalition: coalition }).select({ pending: 1, active: 1, inactive: 1, state: 1 });

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Payer Active data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

/**
 * Detail data of selected coalition : corresponding to the Detail Popup
 * @param {*} req 
 * @param {*} res 
 */
const getCoalitionDetail = (req, res) => {
    const type = req.params.type;
    const coalition = req.params.coalition;

    var query = Payer.find({ type: type, coalition: coalition }).select({ state: 1, effective_date: 1, confirm_flag: 1, medicare_flag: 1, medicaid_flag: 1, commercial_flag: 1, work_flag: 1, reimbursement: 1, comment: 1, criteria: 1, coverage_policy: 1 });

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Payer Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const getCoalitionList = (req, res) => {
    const type = req.params.type;

    var query = Payer.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer"   },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }, 
        {$match: {"type" : type}}])

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Payer Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const getCoalition = (req, res) => {
    const id = req.params.id;

    var query = Payer.findById(id);

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Payer Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

/**
 * Insert or Update the selected coalition and state and type data
 * @param {*} req 
 * @param {*} res 
 */
const editCoalitionDetail = (req, res) => {
    const type = req.params.type;
    const state = req.params.state;
    const coalition = req.params.coalition;

    const payerData = req.body

    Payer.findOne({ type: type, state: state, coalition: coalition }, (err, data) => {
        if (err) {
            return res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Payer from DB.',
                error: err
            })
        }
        if (data) {
            for (let key in payerData) {
                data[key] = payerData[key]
            }

            data.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the Payer data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
        else {
            var newPayer = new Payer();
            newPayer.type = type;
            newPayer.state = state;
            newPayer.coalition = coalition;

            for (let key in payerData) {
                newPayer[key] = payerData[key]
            }

            newPayer.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Inserting the Payer data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: newPayer
                    })
                }
            })
        }
    })
}

const getTypeReimbursements = (req, res) => {
    const type = req.params.type;

    var query = Reimbursement.find({ type: type });

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Reimbursement Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const getCoalitionReimbursements = (req, res) => {
    const type = req.params.type;
    const coalition = req.params.coalition;

    var query = Reimbursement.find({ type: type, coalition: coalition });

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Reimbursement Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const getReimbursement = (req, res) => {
    const id = req.params.id;

    var query = Reimbursement.findById(id);

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Reimbursement Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const saveReimbursement = (req, res) => {
    const type = req.params.type;
    const state = req.params.state;
    const coalition = req.params.coalition;

    const reimbursement = req.body

    Reimbursement.findOne({ type: type, state: state, coalition: coalition }, (err, data) => {
        if (err) {
            return res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Reimbursement from DB.',
                error: err
            })
        }
        if (data) {
            for (let key in reimbursement) {
                data[key] = reimbursement[key]
            }

            data.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the Reimbursement data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
        else {
            var newData = new Reimbursement();
            newData.type = type;
            newData.state = state;
            newData.coalition = coalition;

            for (let key in payerData) {
                newData[key] = payerData[key]
            }

            newData.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Inserting the Reimbursement data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: newData
                    })
                }
            })
        }
    })
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const getPlans = (req, res) => {
    const type = req.params.type;
    const category = req.params.category;

    var query = Plan.aggregate([
        { 
            $lookup : 
                {   "from" : "coalitions", 
                    "localField": "coalition", 
                    "foreignField": "_id", 
                    "as": "payer"
                }
        },
        {   $unwind: "$payer"   },
        {   
            $project: 
                {
                    "payer._id": 0
                }
        }, 
        {$match: {"type" : type, "category": category}}])
    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Plans data from DB.',
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const getCoalitionPlans = (req, res) => {
    var query;
    const type = req.params.type;
    const category = req.params.category;
    const coalition = req.params.coalition;

    if (category == 'medicaid ') {
        query = Payer.find({ type: type, coalition: coalition }.select({ medicaid_active: 1, medicaid_pending: 1, medicaid_inactive: 1, state: 1 }))
    }
    else if (category == 'commercial') {
        query = Payer.find({ type: type, coalition: coalition }.select({ commercial_active: 1, commercial_pending: 1, commercial_inactive: 1, state: 1 }))
    }
    else {
        return res.status(500).json({
            code: 'Invalid_Request'
        })
    }

    query.exec((err, data) => {
        if (err) {
            return res.status(500).json({
                code: "DB_Get_Error",
                message: "Getting the Plan Detail data for all state.",
                error: err
            })
        }
        if (data) {
            return res.json({
                status: true,
                data: data
            })
        }
        else {
            return res.json({
                status: true
            })
        }
    })
}

const editPlan = (req, res) => {
    const type = req.params.type;
    const category = req.params.category;

    const { coalition, plan, status, asc_flag, hopd_flag } = req.body

    Plan.findOne({ type: type, category: category, coalition: coalition }, (err, data) => {
        if (err) {
            return res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Plan data from DB.',
                error: err
            })
        }
        if (data) {
            for( let key in req.body ){
                data[key] = req.body[key]
            }


            data.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the Plan data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: data
                    })
                }
            })
        }
        else {
            var newPlan = new Plan();
            newPlan.type = type;
            newPlan.category = category;
            newPlan.coalition = coalition;
            newPlan.plan = plan;
            newPlan.status = status;
            newPlan.asc_flag = asc_flag;
            newPlan.hopd_flag = hopd_flag;

            newPlan.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Insert_Error',
                        message: 'Inserting the Plan data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: newPlan
                    })
                }
            })
        }
    })
}

const getTotalPlans = (req, res) => {
    const type = req.params.type;
    const category = req.params.category;
    TotalPlan.findOne({ type: type, category: category }, (err, data) => {
        if (err) {
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Total Plans data from DB.',
                error: err
            })
            return;
        }
        if (data) {
            res.json({
                status: true,
                data: data
            })
            return;
        }
        else {
            res.json({
                status: true,
                data: undefined
            })
            return;
        }
    })
}

const editTotalPlans = (req, res) => {
    const type = req.params.type;
    const category = req.params.category;
    const { total, status } = req.body;
    TotalPlan.findOne({ type: type, category: category }, (err, data) => {
        if (err) {
            return res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Total Plan data from DB.',
                error: err
            });
        }
        if (data) {
            data.total = total;
            data.status = status;

            data.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Updating the status data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: data,
                        message: "Updated the Current Total Plan Data."
                    })
                }
            })
        }
        else {
            var plan = new TotalPlan();
            plan.type = type;
            plan.category = category;
            plan.total = total;
            plan.status = status;

            plan.save((err) => {
                if (err) {
                    return res.status(500).json({
                        code: 'DB_Update_Error',
                        message: 'Inserting the Total Plan Data into DB.',
                        error: err
                    })
                }
                else {
                    return res.json({
                        status: true,
                        data: plan,
                        message: "Inserted the Total Plan Data."
                    })
                }
            })
        }
    })
}

const getAllCoalitions = (req, res) => {
    Coalition.find({}, (err, data) => {
        if (err) {
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Payers data from DB.',
                error: err
            })
            return;
        }
        if (data) {
            res.json({
                status: true,
                data: data
            })
            return;
        }
        else {
            res.json({
                status: true,
                data: undefined
            })
            return;
        }
    })
}

const saveCoalition = (req, res) => {
    const { name } = req.body;
    var coalition = new Coalition();
    coalition.name = name

    coalition.save((err) => {
        if (err) {
            res.status(500).json({
                code: 'DB_Insert_Error',
                message: 'New Coalition Data can not be created',
                error: err
            })
            return;
        }
        else {
            res.json({
                status: true,
                data: coalition
            })
        }
    })
}

module.exports = {
    getGlobalStatus,
    savePatientAcitivy,
    getOverallStatus,
    saveTotalServiceStatus,
    getPageActiveStatus,
    getPageTotalStatus,
    getLiveStatus,
    saveLiveStatus,
    getOneActiveStatus,
    getOneTotalStatus,
    getOneLiveStatus,
    saveOneActiveStatus,
    saveOneTotalStatus,
    saveOneLiveStatus,
    getTopPayers,
    getOneTopPayer,
    createTopPayer,
    updateTopPayer,
    getCoalitionActive,
    getCoalitionDetail,
    editCoalitionDetail,
    getCoalitionList,
    getCoalition,
    getTypeReimbursements,
    getCoalitionReimbursements,
    getReimbursement,
    saveReimbursement,
    getPlans,
    getCoalitionPlans,
    editPlan,
    getTotalPlans,
    editTotalPlans,
    getAllCoalitions,
    saveCoalition
}
