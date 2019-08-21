const { Schema, model } = require('mongoose');

const VeichlesSchema = new Schema({
    plaque: {
        type: String,
        required: true
    },
    houseNumber: {
        type: Number,
        required: true
    },
    houseBlock: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = model('Veichles', VeichlesSchema);
