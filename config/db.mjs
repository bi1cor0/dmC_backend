//Importing files
import mongoose from "mongoose"
import dotenv from 'dotenv'

//Configurations
dotenv.config()

const db = process.env.MONGO_URI

//Function that uses mongoose to connect to the MongoDB server
const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log(`Mongoose DB Connected :D`)
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
};

export default connectDB;