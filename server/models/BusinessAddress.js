const mongoose = require("mongoose");

const businessAddress = mongoose.Schema({
    cityName: { type: String },
    address: { type: String },
    zipCode :{ type: String },
    state: { type: String  }
});
  
module.exports = mongoose.model("businessAddress",businessAddress);