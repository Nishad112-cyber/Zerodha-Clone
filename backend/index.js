require("dotenv").config();
const express = require("express");
const mongoose= require("mongoose");

const PORT= process.env.PORT || 3000;
const URL= process.env.MONG_URL;

const app = express();
mongoose.connect(URL);

app.listen(3000, ()=>{
    console.log("server start ho gys")
    console.log(process.env.MONG_URL);
});