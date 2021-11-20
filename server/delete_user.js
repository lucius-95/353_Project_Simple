let getConnection = require("./db");

exports.deleteUser = (req, res) => {
	let { username } = req.body;
	getConnection((err, con) => {
		if (err) throw err;
		console.log("User database connected!");
		let sql = `DELETE FROM users WHERE username='${username}'`;
		con.query(sql, (err, data) => {
			if (err) throw err;
			res.json(data);
			con.release();
		});
	});
};
