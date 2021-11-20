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
