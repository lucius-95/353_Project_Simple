"use strict";

// Load packages
const express = require("express");
const { showUsers, showDonations, getBal } = require("./show-users");
const { deleteUser, deleteDonation } = require("./delete-user");
const { auth } = require("./auth");
const { register } = require("./register");
const { addUser, addDonation } = require("./add-user");
const { editUser } = require("./edit-user");

// Definitions
const PORT = 8080;
const HOST = "localhost";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/show-users", showUsers);
app.post("/auth", auth);
app.post("/register", register);
app.post("/delete-user", deleteUser);
app.get("/get-bal", getBal);
app.get("/show-donation", showDonations);
app.post("/delete-donation", deleteDonation);
app.post("/add-donation", addDonation);
app.post("/add-user", addUser);
app.post("/edit-user", editUser);

app.use("/", express.static("./client"));

app.listen(process.env.PORT);
console.log("Server is up and running...");
