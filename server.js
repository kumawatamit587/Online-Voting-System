const express = require("express");
const app = express();
const db = require("./db");
const { jwtAuthMiddleWare, generateToken } = require("./jwt");

require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3001;

// Import the router files
const userRoutes = require("./routes/userRoutes");
const candidateRoutes = require("./routes/candidateRoutes");

//Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);

app.listen(PORT, () => console.log("Listening on port 3001."));