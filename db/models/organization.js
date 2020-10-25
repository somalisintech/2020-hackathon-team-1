const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrganizationSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  city: {
    type: String,
    required: true,
    max: 100,
  },
  phoneNumber: {
    type: String,
    max: 100,
    // validate: {
    //     //   validator: function (v) {
    //     //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //     //   },
    //     message: (props) => `${props.value} is not a valid phone number!`,
    // },
    required: [true, "User phone number required"],
  },
  templates: [{ type: Schema.Types.ObjectId, ref: "Template" }],
});

module.exports = mongoose.model("Organization", OrganizationSchema);