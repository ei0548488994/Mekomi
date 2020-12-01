const { model } = require("mongoose");
const mongoose = require("mongoose");
const Admin = require("../models/Admin");

//create
const createAdmin = async () => {
  var newAdmin = new Admin({
    adminName:"chani",
    TZ :"151609983",
    password:"3151",
    phone:"0548593777"
  });
  try {
    await newAdmin.save();
    res.status(200).json({Admin:newAdmin});
  } catch (err) {
    res.send({massage:"cannot save admin", err:err});
  }
};
//read
const readAdmin=async(req,res)=>{
  let admin;
  try {
    admin = await Admin.findById(req.params.id);
    if (admin == null) {
      res.send("This manager does not exist in the system");
    }
    else{
       return res.json({ status: 200, myAdmin: admin });
    }
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
}

module.exports = {
  createAdmin,
  readAdmin
};
