const mysql = require("mysql");

const pool = mysql.createPool({
	connectionLimit: 100,
	host: "localhost",
	user: "root",
	password: "admin",
	database: "simple",
});

let getConnection = function (cb) {
	pool.getConnection(function (err, connection) {
		if (err) {
			return cb(err);
		}
		cb(null, connection);
	});
};
module.exports = getConnection;
