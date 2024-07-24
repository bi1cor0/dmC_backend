//Importing files 
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import connectDB from './config/db.mjs';

//Configurations
dotenv.config();
const app = express(); //calling express functionality 
const PORT = process.env.PORT //defining PORT number

connectDB() //calling connectDB function 

//Middleware

app.use(express.json())

//Listen to express server
app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})