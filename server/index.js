"use strict";

// Load packages
const express = require("express");
const mysql = require("mysql");
let { showStaff } = require("./show_staff");

// Definitions
const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();
module.exports = app;

app.use(express.urlencoded({ extended: true }));

// Create a database connection
let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	database: "users",
	password: "admin",
});

// Connect to database
con.connect((err) => {
	if (err) throw err;
	console.log("Database connected!");
});

// Post method to let user post a new message
app.get("/show-staff", showStaff);

app.use("/", express.static("/client", { index: "posting.html" }));

app.listen(PORT, HOST);
console.log("Server is up and running...");
