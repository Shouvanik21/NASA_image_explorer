const mongoose=require("mongoose")

const downloadSchema=new mongoose.Schema({

    search: {
      type: String,
      required: true,
    },

    images:[{
        
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }}]
})

const downloadModel=mongoose.model("Download",downloadSchema)
module.exports=downloadModel