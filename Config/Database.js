const mongoose = require("mongoose");


async function DbConnectionn(){
    const connect = await mongoose.connect(process.env.Db)
    if(connect){
        console.log("Connection success !")
    }
}

module.exports={
    DbConnectionn
}