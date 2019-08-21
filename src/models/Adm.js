const { Schema, model} = require('mongoose');

const AdmSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
});

module.exports = model('Adm', AdmSchema);