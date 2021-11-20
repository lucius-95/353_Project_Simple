let getConnection = require("./db");

exports.showStaff = function (req, res) {
	getConnection(function (err, con) {
		if (err) throw err;
		let sql = "SELECT * FROM users ORDER BY username";
		con.query(sql, function (err, data) {
			res.json(data);
			con.release();
		});
	});
};
