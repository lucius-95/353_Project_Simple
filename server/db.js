const mysql = require("mysql");

const pool = mysql.createPool({
	connectionLimit: 100,
	host: "localhost",
	user: "root",
	password: "admin",
	database: "simple",
});

module.exports = function getConnection(callback) {
	pool.getConnection((err, con) => {
		if (err) return callback(err);
		callback(null, con);
	});
};
