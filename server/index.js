"use strict";

// Load packages
const express = require("express");
const { showUsers, showEvents } = require("./show-users");
const { deleteUser } = require("./delete-user");
const { auth } = require("./auth");
const { register } = require("./register");
const { addStaff, addCustomer, addEvent } = require("./add-user");

// Definitions
const PORT = 8080;
const HOST = "localhost";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/show-users", showUsers);
app.post("/auth", auth);
app.post("/register", register);
app.post("/delete-user", deleteUser);
app.post("/add-staff", addStaff);
app.post("/add-customer", addCustomer);
app.get("/show-events", showEvents);
app.post("/add-event", addEvent);

app.use("/", express.static("./client"));

app.listen(PORT, HOST);
console.log("Server is up and running...");
