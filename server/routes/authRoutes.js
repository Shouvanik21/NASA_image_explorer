const express=require("express")

const router=express.Router()

const {getCategories}=require("../controllers/authController")

router.get("/category",getCategories)

module.exports=router