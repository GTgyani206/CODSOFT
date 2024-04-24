const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSupportSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("newsletter", newsletterSchema);
