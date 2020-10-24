const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Address = require('./Address.js');

// create schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        ype: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    date: {
        type: Date,
        default: Date.now
    }
});
mongoose.model('users', UserSchema);