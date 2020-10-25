const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 100,
    },
    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Organization',
    },
    content: {
      type: String,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Template',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Template', TemplateSchema);
