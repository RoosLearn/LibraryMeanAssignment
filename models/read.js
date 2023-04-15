const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BookSchema = new Schema ({
    name:{
        type: String,
        required:true
    },
    author:{
        type : String,
        required:true
    },
    year:{
        type: Number,
        required: true
    },
    about:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

let BookDATA = mongoose.model('bookdetail', BookSchema)

module.exports = BookDATA