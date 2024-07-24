//Importing files 
import express from 'express';
import dotenv from 'dotenv'
import Characters from './routes/Character_routes.mjs';
import connectDB from './config/db.mjs';
//import character from './models/Characters.mjs';
//import charas from './utilities/character_data.mjs';

//Configurations
dotenv.config();
const app = express(); //calling express functionality 
const PORT = process.env.PORT //defining PORT number

connectDB() //calling connectDB function 

//Middleware
app.use(express.json())

//Routes
app.use('/characters', Characters)

//Create seed route to fill database with data. Uncomment below and the character and charas vars to utilize seeding function. 
//app.get('/seed', async (req, res) => {
//    // This allows us to clear db before putting new data in (optional)
//    // await Dogs.deleteMany({})
//  
//    //This creates all data entries from array in db
//    await character.create(charas);
//  
//    res.send('seeding db');
//  });

//Listen to express server
app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`)
})