const getConnection = require("./db");

exports.deleteUser = (req, res) => {
	let { id } = req.body;
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to delete user!");
		let sql = `DELETE FROM users WHERE id='${id}'`;
		con.query(sql, (err) => {
			if (err) throw err;
			res.send("User deleted!");
			con.release();
		});
	});
};

exports.deleteEvent = (req, res) => {
	let { id } = req.body;
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to delete event!");
		let sql = `DELETE FROM events WHERE id='${id}'`;
		con.query(sql, (err) => {
			if (err) throw err;
			res.send("Event deleted!");
			con.release();
		});
	});
};
