const http=require('http')
const express =require('express')
const app= express();
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const path=require('path')
// const  buisness  = require("../controllers/buisness");
// const router=require('express').Router;
// const buisnessRouter=require("./routs/api")
const buisnessRouter=require("./routs/api")
const port =3002;
dotenv.config()

// const server= http.createServer((req,res)=>{
//     res.write('hello world')
//     res.end();
// })

// app.get('/',(req,res)=>{
//     res.status(200).json({message:'hello'})
// })

app.use('/',buisnessRouter);

app.listen(port,()=>{
    console.log('listening')
});

// mongoose.connection.on('connected',()=>{
//     console.log('mongoDB connected!')
// });

mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology:true,useNewUrlParser:true},()=>{
    console.log("connect to db");
})
