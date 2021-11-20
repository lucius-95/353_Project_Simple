const getConnection = require("./db");

exports.showUsers = (req, res) => {
	getConnection((err, con) => {
		if (err) throw err;
		console.log("Database connected!");
		let { role } = req.body;
		let sql = `SELECT * FROM users WHERE role='${role}' ORDER BY role`;
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
