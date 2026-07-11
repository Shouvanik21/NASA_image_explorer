const express=require("express")

const router=express.Router()

const {getCategories}=require("../controllers/getCategory")
const {getImages}=require("../controllers/getImages")

router.get("/category",getCategories)
router.get("/getimages/:search",getImages)

module.exports=router