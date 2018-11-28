var express = require("express");
var app     = express();
var http = require('http');
var path    = require("path");

app.use(express.static(__dirname + '/'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/main.html'));
});


// mysql connection
/*
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

    // insert into person table
    var sql = "INSERT INTO person (username, password, employer) VALUES ('carlos.bravo', 'abc123!!', 'UM')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    //query all from person table
    var sql2 = "select * from person";
    connection.query(sql2, function (err, result, fields) {
        console.log("Result: " + JSON.stringify(result));
    });

});
*/

var connection  = require('express-myconnection');
var showcontacts = require('./routes/showcontacts');
var createcontact = require('./routes/createcontact');

var mysql = require('mysql');
// all environments
app.set('port', 4300);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(
    connection(mysql,{

        host: 'localhost',
        user: 'root',
        password : '',
        database:'people'
    })
);

app.get('/showcontacts', showcontacts.list);
app.get('/createcontact', createcontact.list);
app.post('/createcontact', function (req, res) {
    // insert into person table
    var username = req.param('username');
    var password = req.param('password');
    var employer = req.param('employer');

    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "people"
    });

    var sql = "INSERT INTO person (username, password, employer) VALUES ('" + username + "', '"+ password +"', '" + employer+ "')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });

    res.redirect('/');
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});

//console.log("Running at Port 8080");