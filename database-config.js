//database config for mongoDB stores the name, password, username, and email of each and every user

// inport and config for using mongoDB
require("dotenv").config()
const mongoose = require("mongoose")
const connect = mongoose.connect("mongodb+srv://Admin:u6WLtfj2lnuokjpO@login.i84jf.mongodb.net/?retryWrites=true&w=majority&appName=Login")

// error handling to tell the admin if the database connected sucessfully or not
connect.then(()=> {
    console.log("Database Connected Sucessfully")
})
.catch(() =>{
    console.log("Database didnt connect properly")
})

// defines a schema for storing user information collected from the sign up process
const LoginSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
})

// defines a schema for storing users picks
const PicksSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        //required: true,
    },
    gameId: {
        type: String,
        //required: true,
    },
    pick: {
        type: String,
        enum: ["homeTeam", "awayTeam"],
        //required: true,
    }
})

ScoreSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        //required: true,
    },
    correctPicks: {
        type: Number,
        //required: true,
    },
    incorrectPicks: {
        type: Number,
        //required: true,
    },
    totalPicks: {
        type: Number,
        //required: true,
    }

})
const User = new mongoose.model("users", LoginSchema)
const Picks = new mongoose.model("picks", PicksSchema)
const Score = new mongoose.model("score", ScoreSchema)

module.exports = {User, Picks, Score}