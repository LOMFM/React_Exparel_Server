const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TotalPlanSchema = new Schema({
    type: { type: String, default: '' },
    category: { type: String, default: ''},
    total: { type: Number, default: 0 },
    status: { type: Number, default: 0 },
});

module.exports = mongoose.model('totalPlan', TotalPlanSchema );
