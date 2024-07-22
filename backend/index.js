const connectToMongo = require('./db');
const express = require('express');
var cors=require("cors");
const path=require("path")
const app = express();
const port=process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
const r = path.join(__dirname, '../public');
app.use(express.static(r));
// server connected
//app.use("/api/auth",require("./routes/auth"))
app.use("/api/donor",require("./routes/bank"))
app.use("/api/auth",require("./routes/auth"))
// app.use("/api/notes",require("./routes/notes"))
app.listen(port,()=>{
    console.log("server connected")
})

// Connect to MongoDB
connectToMongo();