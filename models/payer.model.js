const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PayerSchema = new Schema({
    type: { type: String, default: ''},
    coalition: { type: mongoose.Schema.Types.ObjectId, ref: 'coalition'},
    state: { type: String, default: ''},
    active: { type: Number, default: 0},
    pending: { type: Number, default: 0},
    inactive: { type: Number, default: 100},
    effective_date : { type: String, default: '' },
    confirm_flag: { type: Boolean, default: false},
    medicare_flag: { type: Number },
    medicaid_flag: { type: Number },
    medicaid_plan: { type: Number, default: 0},
    medicaid_active_plan: { type: Number, default: 0},
    medicaid_pending_plan: { type: Number, default: 0},
    medicaid_inactive_plan: { type: Number, default: 100},
    commercial_flag: { type: Number },
    commercial_plan: { type: Number, default: 0},
    commercial_active_plan: { type: Number, default: 0},
    commercial_pending_plan: { type: Number, default: 0},
    commercial_inactive_plan: { type: Number, default: 100},
    work_flag: { type: Number },
    reimbursement: { type: String, default: ''},
    comment: { type: String, default: ''},
    criteria: { type: String, default: ''},
    coverage_policy: { type: String, default: ''}
});

module.exports = mongoose.model('payer', PayerSchema );