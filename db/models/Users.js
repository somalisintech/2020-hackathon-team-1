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
<<<<<<< HEAD
        ref: 'Address'
=======
        ref: 'address'
>>>>>>> 368524fac8e0c3a25a5050b978df5e7f4a944a91
    },
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization'
    }

});
<<<<<<< HEAD
module.exports = mongoose.model("Users", UsersSchema);
=======

module.exports = mongoose.model('users', UserSchema);

>>>>>>> 368524fac8e0c3a25a5050b978df5e7f4a944a91
