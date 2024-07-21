// index.js
const connectToMongo = require('./db');
const express = require('express');
var cors=require("cors");
const app = express();
const port=process.env.PORT || 5000;
app.use(cors())
app.use(express.json())

// server connected
app.use("/api/auth",require("./routes/auth"))
// app.use("/api/notes",require("./routes/notes"))
app.listen(port,()=>{
    console.log("server connected")
})

// Connect to MongoDB
connectToMongo();
