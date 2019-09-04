const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TotalServiceStatusSchema = new Schema({
    page: { type: String, default: '' },
    category: { type: String, default: '' },
    type: { type: String, default: '' },
    total: { type: Number, default: 0 },
    asc: { type: Number, default: 0 },
    hopd: { type: Number, default: 0 },
    dental: { type: Number, default: 0 },
    dental_flag: { type: Boolean, default: false }
});

module.exports = mongoose.model('totalServiceStatus', TotalServiceStatusSchema);
