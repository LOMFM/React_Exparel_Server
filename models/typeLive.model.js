const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeLiveSchema = new Schema({
    type: { type: String, default: '' },
    medicareLives: { type: Number, default: 0 },
    commercialLives: { type: Number, default: 0 },
    medicarePercent: { type: Number, default: 0 },
    commercialPercent: { type: Number, default: 0 },
});

module.exports = mongoose.model('typeLive', TypeLiveSchema );
