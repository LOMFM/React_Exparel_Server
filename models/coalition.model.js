const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CoalitionSchema = new Schema({
    name: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('coalition', CoalitionSchema );
