const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const AddressSchema = new Schema({
    line1: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type: Object,
        required: true
    },
    postalCode: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('address', AddressSchema);