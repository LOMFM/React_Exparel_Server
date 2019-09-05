const PatientActivity = require('../models/patientActivity.model');
const TotalServiceStatus = require('../models/totalServiceStatus.model');
const LiveStatus = require('../models/liveStatus.model');

const mongoose = require('mongoose');

const getGlobalStatus = (req, res) => {
    PatientActivity.find( {page: "patient"}, (err, data) => {
        if( err ){
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
    } )
}

const savePatientAcitivy = (req, res) => {
    const { page, category, type, total, deactive, active, pending } = req.body
    PatientActivity.findOne( {type: type, page: page, category: category}, (err, data) => {
        if(err){
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Activity data from DB.',
                error: err
            })
            return;
        }

        if(!data){
            var activity = new PatientActivity();
            activity.page = page;
            activity.category = category;
            activity.type = type;
            activity.total = total;
            activity.deactive = deactive;
            activity.active = active;
            activity.pending = pending

            activity.save((err) => {
                if(err) {
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
        else{
            data.total = total;
            data.deactive = deactive;
            data.active = active;
            data.pending = pending

            data.save((err) => {
                if(err) {
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
    } )
}


const getOverallStatus = (req, res) => {
    TotalServiceStatus.find( {page: "patient"}, (err, data) => {
        if( err ){
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
    } )
}

const saveTotalServiceStatus = (req, res) => {
    const { page, category, type, total, asc, hopd } = req.body;
    TotalServiceStatus.findOne({page: page, category: category, type: type}, (err, data) => {
        if( err ){
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Status data from DB.',
                error: err
            })
            return;
        }
        if( !data ){
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
                if( err ){
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
        else{
            data.total = total
            data.asc = asc
            data.hopd = hopd
            data.dental_flag = false
            data.dental = 0

            data.save((err) => {
                if( err ){
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
    LiveStatus.find( {page: "patient"}, (err, data) => {
        if( err ){
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
    } )
}

const saveLiveStatus = (req, res) => {
    const {page, total, asc, hopd, _id} = req.body
    LiveStatus.findOne({_id: _id}, (err, data) => {
        if( err ){
            res.status(500).json({
                code: 'DB_Get_Error',
                message: 'Getting the Status data from DB.',
                error: err
            })
            return;
        }
        if( !data ){
            var status = new LiveStatus();
            status.page = page
            status.total = total
            status.asc = asc
            status.hopd = hopd

            status.save((err) => {
                if( err ){
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
        else{
            data.total = total
            data.asc = asc
            data.hopd = hopd

            data.save((err) => {
                if( err ){
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

module.exports = {
    getGlobalStatus,
    savePatientAcitivy,
    getOverallStatus,
    saveTotalServiceStatus,
    getLiveStatus,
    saveLiveStatus
}
