const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReimbursementSchema = new Schema({
    type: { type: String, default: ''},
    coalition: { type: String, default: ''},
    region: { type: String },
    effective_date: { type: Number, default: 0},
    reimbursement: { type: Number, default: 0 },
    criteria: { type: String },
    comments: { type: String }
});

module.exports = mongoose.model('reimbursement', ReimbursementSchema );
