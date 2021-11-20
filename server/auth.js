let getConnection = require("./db");

exports.auth = function (req, res) {
	getConnection((err, con) => {
		if (err) throw err;
		var username = req.body.username;
		var password = req.body.password;
		if (username && password) {
			con.query(
				"SELECT * FROM users WHERE username = ? AND password = ?",
				[username, password],
				function (err, results) {
					if (results.length > 0) {
						res.redirect("/dashboard.html");
					} else {
						res.redirect("/login.html");
					}
					con.release();
				}
			);
		} else {
			res.send("Please enter Username and Password!");
		}
	});
};
