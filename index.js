const express = require("express");

const app = express();

require("dotenv").config()

const {DbConnectionn} = require("./Config/Database")

const {Cluster0} = require("./Models/userRole")



app.listen(process.env.PORT,function(){
    console.log(`Server is running on PORT ${process.env.PORT}`)
    DbConnectionn();
})