import mongoose from "mongoose";
//New character schema for adding new characters. 
const charSchema = new mongoose.Schema({
    Player_Name: {
        type: String,
        required: true
    },
    Character_Name: {
        type: String,
        required: true
    },
    Class: {
        type: String,
        required: true
    },
    Race: {
        type: String,
        required: true
    },
    Level: {
        type: Number,
        required: true
    },
    Health_Points: {
        type: Number,
        required: true
    },
    Alive: {
        type: Boolean,
    },
    Initiative: {
        type: Number
    }
})

export default mongoose.model('Character', charSchema)