//*Dependencies
const mysql = require("mysql");

//*Sets up MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "cat_db"
});

//*Initiates MySQL connection
connection.connect(function(err){
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//* Exports connection for ORM
module.exports = connection;