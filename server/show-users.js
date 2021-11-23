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

exports.showDonations = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		con.query("SELECT * FROM donations ORDER BY id", (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};

exports.getBal = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		con.query("SELECT amount from donations", (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
