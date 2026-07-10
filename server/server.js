const express =require("express")
const dotenv=require("dotenv")
dotenv.config()
const connectDB = require("./config/db")
connectDB()

const app=express()
app.use(express.json())

const authRoutes=require("./routes/authRoutes")
app.use("/api/auth",authRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to Hubble Explorer Backend")
})

const PORT=process.env.PORT || 5000;

app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
})