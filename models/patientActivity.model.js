const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientActivitySchema = new Schema({
    page: { type: String, default: ''},
    category: {type: String, default: ''},
    type: { type: String, default: '' },
    total: { type: Number, default: 0 },
    deactive: { type: Number, default: 100 },
    active: { type: Number, default: 0 },
    pending: { type: Number, default: 0 }
});

module.exports = mongoose.model('patientActivity', PatientActivitySchema );
