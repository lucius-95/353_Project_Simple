const getConnection = require("./db");

exports.editUser = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to edit user!");

		let { id, firstname, lastname } = req.body;

		let sql = `UPDATE users SET firstname='${firstname}', lastname='${lastname}' WHERE id='${id}'`;
		con.query(sql, (err) => {
			if (err) throw err;
			res.send("User edited!");
			con.release();
		});
	});
};
