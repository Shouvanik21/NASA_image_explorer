const mongoose=require("mongoose")

const downloadSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    downloadedAt: {
        type: Date,
        default: Date.now
    }
})

const downloadModel=mongoose.model("Download",downloadSchema)
module.exports=downloadModel