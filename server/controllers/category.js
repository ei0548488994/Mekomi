const { model } = require("mongoose");
const mongoose = require("mongoose");
const Category = require("../models/Categories");
const mainCategories = require("../models/MainCategories");
const MainCategories = require("../models/MainCategories");

//create
const createCategory = async (req, res) => {
  const maincategory = await MainCategories.findOne({
    mainCategoryName: "Shops",
  });
  var newCategory = new Category({
    categoryName:"furniture shop",
    mainCategories:maincategory._id,
  });

  try {
    await newCategory.save();
    await maincategory.categories.push(newCategory);
    mainCategory.save();
    res.status(200).json({ category: newCategory });
  } catch (error) {
    console.log(error)
    res.status(400).json({ssmassage:"not create",error:error});
  }
};

//read
const getCategory = async (req, res) => {
  let readCategory;
  try {
    readCategory = await Category.findById(req.params.id);
    console.log(readCategory);
    if (readCategory == null) {
      res.send("coudnt have a category");
    } else {
      return res.json({ status: 200, myCategory: readCategory });
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ massage:" error.maasage",error:error});
  }
};

module.exports = {
  createCategory,
  getCategory,
};
