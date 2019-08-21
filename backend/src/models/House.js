const { Schema, model } = require('mongoose');

const HouseSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    block: {
        type: Number,
        required: true
    },
    ownerID: Schema.Types.ObjectId,
    inUse: {
        type: Boolean,
        required: true,
        default: true
    },
    forSell: {
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = model('House', HouseSchema);