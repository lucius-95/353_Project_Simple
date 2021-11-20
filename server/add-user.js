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

exports.addEvent = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to add event!");

		let { event, id, time } = req.body;
		let isStaff = false;
		let user = "";

		con.query(`SELECT * FROM users WHERE id='${id}'`, (err, data) => {
			if (err) throw err;
			if (data.length > 0 && data[0].role == "Staff") {
				console.log("ID is staff");
				isStaff = true;
				user = data[0].firstname + " " + data[0].lastname;
			}
			if (isStaff) {
				con.query(
					`INSERT INTO events (event, user, time) VALUES ('${event}', '${user}', '${time}')`,
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
			con.release();
		});
	});
};
