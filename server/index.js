"use strict";

// Load packages
const express = require("express");
let { showStaff } = require("./show_staff");
let { auth } = require("./auth");

// Definitions
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

app.use(express.urlencoded({ extended: true }));

// Post method to let user post a new message
app.get("/show-staff", showStaff);
app.post("/auth", auth);

app.use("/", express.static("../client"));

app.listen(PORT, HOST);
console.log("Server is up and running...");
