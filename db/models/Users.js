const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const UsersSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    }

});
module.exports = mongoose.model("Users", UsersSchema);