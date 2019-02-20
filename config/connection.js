// requiring mySQL
const mysql = require("mysql");
// hide my password
require('dotenv').config();
// settings to open connection to DB
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database: "movietracker_db"
});

// initialize connection to DB
connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + error.stack);
        return;
    };
    console.log("connected as ID: " + connection.threadId);
});

// Export connection for ORM? 
module.exports = connection;