import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from "path"

//dotenv configuration
dotenv.config()

//rest object of express
const app=express()
const __dirname =path.resolve()

//midleware
app.use(cors())
app.use(express.json())

//static files
app.use(express.static(path.join(__dirname,'./client/build')))

//routes
import portfolioRoute from "./routes/portfolioRoute.js"
app.use('/api/v1/portfolio', portfolioRoute)
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
})

//port

const PORT = process.env.PORT || 8080

//listen
app.listen(PORT,()=>{
    console.log(`Server Running on : ${PORT}`);
    
})