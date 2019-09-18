const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanSchema = new Schema({
    type: { type: String, default: ''},
    coalition: { type: String, default: ''},
    category: { type: String, default: ''},
    plan: { type: Number, default: 0},
    status: { type: Number, default: 0 },
    asc_flag: { type: Boolean, default: false},
    hopd_flag: { type: Boolean, default: false}
});

module.exports = mongoose.model('plan', PlanSchema );