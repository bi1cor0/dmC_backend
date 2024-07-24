//Importing files 
import express from 'express';
import dotenv from 'dotenv'
import Characters from './routes/Character_routes.mjs';
import connectDB from './config/db.mjs';

//Configurations
dotenv.config();
const app = express(); //calling express functionality 
const PORT = process.env.PORT //defining PORT number

connectDB() //calling connectDB function 

//Middleware
app.use(express.json())

//Routes
app.use('/characters', Characters)

//Listen to express server
app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})