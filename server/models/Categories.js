const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
    categoryName:{ type: String ,required: true },
    mainCategories: {type: mongoose.Schema.Types.ObjectId,ref:"main"},
    business:[{type: mongoose.Schema.Types.ObjectId,ref:"buisnesses"}]  
});
  
module.exports = mongoose.model("categoryies",categoriesSchema);