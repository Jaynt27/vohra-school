const mongoose = require("mongoose");


const teacherSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },


    subject:{
        type:String,
        required:true
    },


    qualification:{
        type:String
    },


    experience:{
        type:String
    },


    resume:{
        type:String
    }

});


module.exports =
mongoose.model("Teacher",teacherSchema);