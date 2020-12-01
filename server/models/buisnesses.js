const mongoose = require("mongoose");


const businessSchema = mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "admin" },
  businessName: { type: String},
  category: { type: mongoose.Schema.Types.ObjectId, ref: "categoryies" , required: true },
  description: { type: String, minlength: 4, maxlength: 1000, required: true  },
  adress: { type: mongoose.Schema.Types.ObjectId, ref: "adressBuisness" },
  email: {
    type: String,
    required: true,
    // unique: true,
    match: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
    phone: {
    type: String,
    //  required: true,
    match: /\d{10}/,
    // unique: true,
  },
  elevator: { type: Boolean },
  FriendlyWorkspace: { type: Boolean },
  InstantBook: { type: Boolean },
  WirelessInternet: { type: Boolean },
  freeParkingOnPremises: { type: Boolean },
  freeParkingOnStreet: { type: Boolean },
  smokingAllowed: { type: Boolean },
  events: { type: Boolean },
  website: { type: String, maxlength: 35 },
  facebook: { type: String, maxlength: 35 },
  twitter: { type: String, maxlength: 35 },
  googleplus: { type: String, maxlength: 35 },
});

module.exports = mongoose.model("buisnesses", businessSchema);

 
 