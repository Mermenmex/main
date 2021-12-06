/* Modeèle de données */
const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },

});

module.exports = mongoose.model('Thing', thingSchema);