//Created By A3 For Athell//
//28.9.2022//
const express = require ('express');

const app = express()
app.get("/You Are My Sunshine",(req,res)=>{
    res.sendFile(__dirname+"/1.html")
})
app.get("/You Are My Happiness",(req,res)=>{
    res.sendFile(__dirname+"/2.html")
})
app.get("/You Are My Only One",(req,res)=>{
    res.sendFile(__dirname+"/3.html")
})
app.get("/Babe, Do you Wanna Be Mine",(req,res)=>{
    res.sendFile(__dirname+"/4.html")
})
app.listen(3000,()=>{

    console.log('Server starting up at: port :3000:');
})
