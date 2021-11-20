let getConnection = require("./db");

exports.showStaff = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Staff database connected!");
		let sql = "SELECT * FROM users WHERE role='Staff' ORDER BY username";
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};

exports.showCustomers = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Customers database connected!");
		let sql = "SELECT * FROM users WHERE role='Customer' ORDER BY username";
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
