const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopPayerSchema = new Schema({
    type: { type: String, default: ''},
    coalition: { type: mongoose.Schema.Types.ObjectId, ref: 'coalition' },
    lives: { type: Number, default: 0},
    status: { type: Number, default: 0 },
    order: { type: Number, default: 1}
});

module.exports = mongoose.model('topPayer', TopPayerSchema );