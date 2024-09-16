import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express()

// middlewares
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// req in json format
app.use(express.json({
    limit:"16kb"
}))
// req in  url form
app.use(express.urlencoded({extended:true,limit:"16kb"}))
// for images and pdf and for public access
app.use(express.static("public"))
// read server side 
app.use(cookieParser())
export {app}