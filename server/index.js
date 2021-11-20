"use strict";

// Load packages
const express = require("express");
const { showStaff, showCustomers } = require("./show_users");
let { auth } = require("./auth");
let { register } = require("./register");
const { deleteUser } = require("./delete_user");

// Definitions
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/show-staff", showStaff);
app.get("/show-customers", showCustomers);
app.post("/auth", auth);
app.post("/register", register);
app.post("/delete-user", deleteUser);

app.use("/", express.static("../client"));

app.listen(PORT, HOST);
console.log("Server is up and running...");
