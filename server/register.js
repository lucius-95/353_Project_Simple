let getConnection = require("./db");

exports.register = function (req, res) {
	getConnection((err, con) => {
		if (err) throw err;
		var username = req.body.username;
		var password = req.body.password;
		var role = req.body.role;
		var name = req.body.name;
		con.query(
			`INSERT INTO users (username, name, role, password) VALUES ('${username}', '${name}', '${role}', '${password}')`,
			function (err, results) {
				if (err) {
					console.log("failed insert");
					res.redirect("/register.html");
					con.release();
					return;
				}
				console.log("worked!");
				res.redirect("/dashboard.html");
				con.release();
			}
		);
	});
};
