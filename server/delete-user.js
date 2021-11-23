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

exports.deleteDonation = (req, res) => {
	let { id } = req.body;
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected to delete donation!");
		let sql = `DELETE FROM donations WHERE id='${id}'`;
		con.query(sql, (err) => {
			if (err) throw err;
			res.send("Donation deleted!");
			con.release();
		});
	});
};
