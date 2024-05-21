const mongoose = require("mongoose");

require("dotenv").config();

const mongoURL = process.env.MONGODB_URL_LOCAL;

//Set up MongoDB connection
mongoose.connect(mongoURL);

//Get the default connection

const db = mongoose.connection;

//Define event listeners for database connection

db.on("connected", () => {
  console.log("Connected to mongoDB server.");
});
db.on("error", () => {
  console.log("error to mongoDB server.");
});
db.on("isconnected", () => {
  console.log("is not connected to mongoDB server.");
});

module.exports = db;
