const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema
const AdminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    }

});
module.exports = mongoose.model("Admin", AdminSchema);
