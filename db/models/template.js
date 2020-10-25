const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemplateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    orginzation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Template", TemplateSchema);
