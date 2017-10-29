
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    firstName: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    lastName: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    address: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    zip: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    city: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    email: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    phone: {
        type: String,
        required: 'Kindly enter the firstName'
    },
    notes: {
        type: String
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);