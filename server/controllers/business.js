const Buisness = require("../models/buisnesses");
const { model } = require("mongoose");
const mongoose = require("mongoose");
const Categories = require("../models/Categories");
const Admin = require("../models/Admin");
const Adress = require("../models/BusinessAddress");

//crate
const createBuisness = async (req, res) => {
  const myCategory = await Categories.findOne({
    categoryName: "Shoe Store",
  });
  const myAdmin = await Admin.findOne({
    adminName: "chani",
  });
  const myAdress = await Adress.findOne({
    address: "rbi-akiva",
  });

  var newBuisness = new Buisness({
    admin: myAdmin._id,
    businessName: "ffffff",
    category: myCategory._id,
    description: "good shoe",
    adress: myAdress._id,
    email: "cjngyn@gmail.com",
    phone: "0987654213",
    elevator: true,
    FriendlyWorkspace: false,
    InstantBook: true,
    WirelessInternet: false,
    freeParkingOnPremises: true,
    freeParkingOnStreet: false,
    smokingAllowed: true,
    events: false,
    website: "www.co.il",
    facebook: "facebook@gmail.com",
    twitter: "twitter@gamil.com",
    googleplus: "googleplus@gmail.com",
  });

  try {
    await newBuisness.save();
    await myCategory.business.push(newBuisness);
    await myCategory.save();
    res.status(200).json(newBuisness);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ maasage: "cannot save buisness", error: error.message });
  }
};
//read
const getBuisness = async (req, res) => {
  console.log(req.params.id);
  let readBuisness;
  try {
    readBuisness = await Buisness.findById(req.params.id);
    if (readBuisness == null) {
      res.send("coudnt have a buisness");
    }
    return res.json({ status: 200, myBuisness: readBuisness });
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
  return res.json({ myBuisness: readBuisness });
};
//update
const updateBuisness = async (req, res) => {
  try {
    buisnes = await Buisness.findOneAndUpdate(
      { name: req.params.name },
      req.body
    );
    await buisnes.save();
    res.send("the user is update");
  } catch (error) {
    res.status(500).json({ maasage: error.maasage });
  }
};
const searchBuisnessByParentCategory = async (req, res) => {
  console.log(req.params.name);
  try {
    const categories = await Category.find({ parentCategory: req.params.name });
    console.log(categories);
    res.send(categories);
  } catch (error) {
    res.status(500).json({ maasage: error.maasage });
  }
};
//getBuisnessByCategory

const getBuisnessByCategory = async (req, res) => {
  var category = req.params.idCategory;
  console.log(category);
  try {
    var getBuisnesses = await Buisness.find({ category: category });
    res.status(200).json(getBuisnesses);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

//getBuisnessByText
const getBuisnessByText = async (req, res) => {
  var text = req.body.text;
  console.log(text);
  try {
    //בדיקה אם המשתמש הכניס טקסט
    //
    if (text != null) {
      //בדיקה אם טקסט קיים בקטגוריות
      var getCategoryName = await Categories.find({ categoryName: text });
      if (getCategoryName.length>1) {
        var getCategoryName = await Categories.find({
          categoryName: text,
        }).populate({ path: "business" });
        res.json({ categories: getCategoryName });
      } else {
        var getAllBuisness = await Buisness.find({ businessName: text });
        console.log(getAllBuisness);
        res.status(200).json({"business":getAllBuisness});
      }
    } else {
      res.json("enter your text");
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

// const getBuisnessByCatgories = async (req,res) => {
//   console.log("function: getBuisnessByCatgories");
//   Categories.find()
//   .populate({
//       path: 'business',
//     },)
//       .then((catgories) => {
//       if(catgories){
//           console.log("catgories!!! ,",catgories)
//           res.status(200).json({catgories})
//       }
//           // res.status(201).send('no tickets');
//   })
//      .catch((err)=>{
//      console.log("err: ",err)
//       res.status(500),json({err});
//      })
// }

module.exports = {
  createBuisness,
  getBuisness,
  updateBuisness,
  searchBuisnessByParentCategory,
  getBuisnessByCategory,
  getBuisnessByText,
};
