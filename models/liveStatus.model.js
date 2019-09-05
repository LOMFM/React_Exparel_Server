const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LiveStatusSchema = new Schema({
    page: { type: String, default: ''},
    step: {type: String, default: ''},
    hopd: { type: Number, default: 0 },
    hopd: { type: Number, default: 0 },
    total: { type: Number, default: 100 },
});

module.exports = mongoose.model('liveStatus', LiveStatusSchema );
