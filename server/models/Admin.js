const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
   
    adminName: { type: String, required: true },
    TZ :{ type: String ,required: true,maxlength:9 },
    password: {type: String ,required: true,minlength:4,maxlength:8},
    phone: {
        type: String,
        //  required: true,
        match: /\d{10}/
      },
});
  
module.exports = mongoose.model("admins",adminSchema);