const { Schema, model } = require('mongoose');

const DoormanSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: String,  
    email: String,
    typeEmp: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    }
});

module.exports = model('Doorman', DoormanSchema);