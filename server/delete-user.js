const getConnection = require("./db");

exports.deleteUser = (req, res) => {
	let { id } = req.body;
	getConnection((err, con) => {
		if (err) throw err;
		console.log("User database connected!");
		let sql = `DELETE FROM users WHERE id='${id}'`;
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
