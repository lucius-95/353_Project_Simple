'use strict';

// Load packages
const express = require('express');
const mysql = require('mysql');

// Definitions
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.use(express.urlencoded({extended: true}));

// Create a database connection
let con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'project_simple',
	password: 'admin',
});

// Connect to database
con.connect((err) => {
	if (err) throw err;
	console.log('Database connected!');
});

// Post method to let user post a new message
app.post('/postMessage', (req, res) => {
	let {topic} = req.body;
	let {data} = req.body;

	// Update database data
	let sql = `INSERT INTO posts (topic, data) VALUES ('${topic}', '${data}')`;
	con.query(sql, (err) => {
		if (err) throw err;
	});

	res.send('OK!');
});

// Post method to let user decide how the posted messages are ordered
app.post('/postOrder', (req, res) => {
	let {type} = req.body;
	let {by} = req.body;
	let sql = 'SELECT * FROM posts ORDER BY timestamp'; // Default order is by ascending timestamp
	if (by === 'Topic') {
		if (type === 'Ascending') {
			sql = 'SELECT * FROM posts ORDER BY topic';
		} else {
			sql = 'SELECT * FROM posts ORDER BY topic DESC';
		}
	} else if (type === 'Descending') {
		sql = 'SELECT * FROM posts ORDER BY timestamp DESC';
	}
	// Get the ordered data and send back to client
	con.query(sql, (err, data) => {
		if (err) throw err;
		res.json(data);
	});
});

app.use('/', express.static('/client', {index: 'posting.html'}));

app.listen(PORT, HOST);
console.log('Server is up and running...');
