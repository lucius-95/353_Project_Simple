"use strict";

// Load packages
const express = require("express");
const { showStaff, showCustomers } = require("./show-users");
const { deleteUser } = require("./delete-user");
const { auth } = require("./auth");

// Definitions
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/show-staff", showStaff);
app.get("/show-customers", showCustomers);
app.post("/auth", auth);
app.post("/delete-user", deleteUser);

app.use("/", express.static("../client"));

app.listen(PORT, HOST);
console.log("Server is up and running...");
