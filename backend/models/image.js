const mongoose =require('mongoose')

const Schema = mongoose.Schema

const imageSchema = new Schema({
    title:{
        type:String,
        required: true
    },
    path:String,
    image:{
        data:Buffer,
        contentType:String
    }
    // image:String
},
{timestamps:true})

const Image = mongoose.model('Image', imageSchema)

module.exports = Image