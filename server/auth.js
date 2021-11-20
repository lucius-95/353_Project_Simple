exports.auth = function (req, res) {
	console.log(req);
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		con.query(
			"SELECT * FROM accounts WHERE username = ? AND password = ?",
			[username, password],
			function (error, results, fields) {
				console.log("result: " + results);
				if (results.length > 0) {
					req.session.loggedin = true;
					res.redirect("/client/dashboard.html");
				} else {
					res.send("Incorrect Username and/or Password!");
				}
			}
		);
		con.end();
	} else {
		res.send("Please enter Username and Password!");
	}
};
