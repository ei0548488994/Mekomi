const mongoose = require("mongoose");

const mainCategorySchema = mongoose.Schema({
    mainCategoryName :{ type: String ,required: true },
    categories:[{type: mongoose.Schema.Types.ObjectId,ref:"categoryies"}]  
   
});
  
module.exports = mongoose.model("main",mainCategorySchema);