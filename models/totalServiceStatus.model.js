const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TotalServiceStatusSchema = new Schema({
    page: { type: String },
    category: { type: String },
    type: { type: String },
    total: { type: Number, default: 0 },
    asc: { type: Number, default: 0 },
    hopd: { type: Number, default: 0 },
    dental: { type: Number, default: 0 },
    dental_flag: { type: Boolean, default: false }
});

module.exports = mongoose.model('totalServiceStatus', TotalServiceStatusSchema);
