require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routers/userRouter"); 

const app = express();
// accept json type
app.use(express.json());
// accept requsets came from urls 
// app.use(cons( origin: "http://localhost:3000")); -----> this is filter
app.use(cors());

// Run server
app.listen(process.env.PORT, () => { console.log("Server listening on port " + process.env.PORT) })

mongoose.set("strictQuery", false);
// connect mongo
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(response => console.log("CONNECTED MONGODB"))
    .catch(error => console.log("MONGO CONNECT ERROR" + error));


app.use("/users" , userRouter);

