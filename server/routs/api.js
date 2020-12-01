// const { Router } = require("express");
const router = require("express").Router();
const {createBuisness,getBuisness,
    updateBuisness,
    getBuisnessByCategory,
    getBuisnessByText} = require("../controllers/business");
const {createCategory,getCategory} = require("../controllers/category"); 
const {createAdmin,readAdmin} = require("../controllers/admin"); 
const {createBusinessAddress,readaAdress} = require("../controllers/businessAddress"); 
const {createMainCategory,getMainCategory} = require("../controllers/mainCategory"); 

// router.get("/", ()=>{
//     console.log("hello get")
// });
// router.route("/remove").delete(function(req, res) {});
// router.get("/searchBuisnessByParentCategory/:name",searchBuisnessByParentCategory);


//mainCategory
router.post("/createMainCategory",createMainCategory);
router.get("/getMainCategory/:id",getMainCategory);

//buisness
router.post("/createBuisness",createBuisness);
router.get("/getBuisnessById/:id",getBuisness)
router.post("/updateBuisness/:name",updateBuisness)
router.get('/getBuisnessByCategory/:idCategory',getBuisnessByCategory)
router.post('/getBuisnessByText',getBuisnessByText)
 

//admin
router.get("/createAdmin",createAdmin);
router.get("/readAdmin/:id",readAdmin);

//businessAddress
router.post("/createAddress",createBusinessAddress);
router.get("/readAddress/:id",readaAdress);

//category
router.post("/getCategory/:id",getCategory);
router.post("/createCategory",createCategory);
 
module.exports = router;

