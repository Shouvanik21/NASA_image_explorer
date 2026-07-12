const express=require("express")

const router=express.Router()

const {getImages}=require("../controllers/getImages")

router.get("/getimages/:search",getImages)

module.exports=router