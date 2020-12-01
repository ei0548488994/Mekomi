const { model } = require("mongoose");
const mongoose = require("mongoose");
const BusinessAddress = require("../models/BusinessAddress");

//create
const createBusinessAddress = async (req, res) => {
  var newBusinessAddress = new BusinessAddress({
    cityName:"jerusalem",
    address: "rommema 20",
    zipCode :"23456",
    state:"israel"
  });
  try {
    await newBusinessAddress.save();
    res.status(200).json({ "buisness": newBusinessAddress });
  } catch (error) {
    res.send("cannot save adress", error.message);
  }
};

//read
const readaAdress=async(req,res)=>{
  let Adress;
  try {
    Adress = await BusinessAddress.findById(req.params.id);
    if (Adress == null) {
      res.send("Address does not exist");
    } else {
      return res.json({ status: 200, myAdress: readaAdress });
    }
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
}
module.exports = {
    createBusinessAddress,
    readaAdress
};
