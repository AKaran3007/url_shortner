const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    longUrl:{
        type : String,
        required : true
    },
    shortUrl:{
        type : String,
        unique : true
    },
    clickCount : {
        type : Number,
        default : 0
    }
},


{
    fname:String,
    lname:String,
    email:{ type: String, unique: true},
    password:String,
 },
 {
     collection:"Urlshort",
 }

 
)

const UrlModel = mongoose.model('Urlshort' , urlSchema);

module.exports = {UrlModel};