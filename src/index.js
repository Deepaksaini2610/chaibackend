// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDb from "./db/index.js";


// second approach for db calling
import { app } from "./app.js";
dotenv.config();
connectDb().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("mongo db connection failer !!!,",err)
})











// first approach for calling db
// iife semicolon use for cleaning
// import mongoose from "mongoose"
// import { DB_NAME } from "./constants.js"

// import express from "express"
// const app = express()
// ;(async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("err",error)
//             throw error 
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
//     }catch(error){
//         console.log("error:",error)
//         }
    
// })()
    
