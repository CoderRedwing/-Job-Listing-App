require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');


const dbConnect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection error", error);
        process.exit(1);
    }
}

module.exports = dbConnect;