const mongoose = require("mongoose");


const userRole_model = mongoose.Schema(

    {
        Role:{
            type:String,
            required:[true,"Role must be enter"]
        },
        status:{
            type:String,
            required:[true,"Status must be valid"]
        },

    }
)

module.exports= mongoose.model("Cluster0",userRole_model)