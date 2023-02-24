const mongoose = require("mongoose");

const design = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter your Name"],
    },
    description:{
        type:String,
        required:[true,"Please Enter Description"],
    },
    targetAudience:{
        type:String,
        required:[true,"Please Enter TA"],
    },
    requirements:{
        type:String,
    }
})

module.exports = mongoose.model("des",design);