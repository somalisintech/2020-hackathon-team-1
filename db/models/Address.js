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
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        default: true
    }
});

module.exports = mongoose.model("Address", AddressSchema);