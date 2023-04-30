const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const studentTicketRoutes = require("./routes/studentTicketRouter");


// Connection to MongoDB
mongoose
  .connect("mongodb://localhost:27017/helpdesk")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));


const app = express()
//app.use(cors)// cross resource origin
app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'))
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use("/api/student-tickets", studentTicketRoutes);


module.exports = app ;