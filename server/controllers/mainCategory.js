const { model } = require("mongoose");
const mongoose = require("mongoose");
const MainCategory = require("../models/MainCategories");

//create
const createMainCategory = async (req, res) => {
  var newMain = new MainCategory({ mainCategoryName: "Shops" });
  try {
    await newMain.save();
    res.status(200).json({ mainCategory: mainCategory });
  } catch (error) {
    res.status(400).json({error:"cannot save buisness",massage:error.maasage});
  }
  const getMain= await MainCategory.findById('5fbba4cb8102fc20b0b632d6').populate('mainCategory')
};

//read
//קוד נכון מבחינת מעטפת
const getMainCategory = async (req, res) => {
  let readMain;
  try {
    readMain = await MainCategory.findById(req.params.id);
    if (readMain == null) {
      res.send("coudnt have a buisness");
      return res.json({ status: 200, myBuisness: readMain });
    }
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
};

module.exports = {
  createMainCategory,
  getMainCategory,
};
