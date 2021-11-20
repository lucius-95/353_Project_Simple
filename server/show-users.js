const getConnection = require("./db");

exports.showUsers = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to show users!");
		let { role } = req.body;
		let sql = `SELECT * FROM users WHERE role='${role}' ORDER BY lastname`;
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};

exports.showEvents = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		con.query("SELECT * FROM events ORDER BY id", (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
