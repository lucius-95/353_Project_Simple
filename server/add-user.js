const getConnection = require("./db");

exports.addUser = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to add user!");

		let { firstname, lastname, role } = req.body;

		let sql = `INSERT INTO users (firstname, lastname, role) VALUES ('${firstname}', '${lastname}', '${role}')`;
		con.query(sql, (err) => {
			if (err) throw err;
			res.send("User added!");
			con.release();
		});
	});
};

exports.addDonation = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to add event!");

		let { amount, id } = req.body;
		let isValid = false;
		let user = "";

		con.query(`SELECT * FROM users WHERE id='${id}'`, (err, data) => {
			if (err) throw err;
			if (data.length > 0) {
				console.log("ID Exists");
				isValid = true;
				user = data[0].firstname + " " + data[0].lastname;
			}
			if (isValid) {
				con.query(
					`INSERT INTO donations (amount, user) VALUES ('${amount}', '${user}')`,
					(err) => {
						if (err) throw err;
						res.status(200);
						res.send("OK");
					}
				);
			} else {
				res.status(404);
				res.send("Failed");
			}
		});
		con.release();
	});
};
