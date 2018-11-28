var mysql = require('mysql');
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
    database: "people"
});


connection.connect(function(err) {
	if (err) 
		throw err;
	console.log("Connected!");
	sql = "select * from person";
	connection.query(sql, function (err, result, fields) {
	console.log("Result: " + JSON.stringify(result)); 
	});
  
  });
