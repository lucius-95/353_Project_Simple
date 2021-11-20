const getConnection = require("./db");

exports.addStaff = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to add staff!");

		let { firstname, lastname } = req.body;

		let sql = `INSERT INTO users (firstname, lastname, role) VALUES ('${firstname}', '${lastname}', 'Staff')`;
		con.query(sql, (err) => {
			if (err) throw err;
		});

		sql = "SELECT * FROM users WHERE role='Staff' ORDER BY 'lastname'";
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};

exports.addCustomer = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to add customer!");

		let { firstname, lastname } = req.body;

		let sql = `INSERT INTO users (firstname, lastname, role) VALUES ('${firstname}', '${lastname}', 'Customer')`;
		con.query(sql, (err) => {
			if (err) throw err;
		});

		sql = "SELECT * FROM users WHERE role='Customer' ORDER BY 'lastname'";
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
