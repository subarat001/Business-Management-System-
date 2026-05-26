const mongoose = require("mongoose")

const customerData = mongoose.Schema(
  {
    name:     { type: String, required: true, trim: true },
    email:    { type: String, required: true, trim: true },
    phoneNum: { type: String, required: true, trim: true },
    company:  { type: String, trim: true, default: "" },
    product:  { type: String, required: true, trim: true },
    load:     { type: String, required: true, trim: true },
    city:     { type: String, required: true, trim: true },
    msg:      { type: String, trim: true, default: "" },
  },
  { timestamps: true }
);

const CustomerModel = mongoose.model("coustomers", customerData);
module.exports = CustomerModel;