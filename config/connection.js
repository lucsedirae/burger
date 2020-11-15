//*Dependencies
const mysql = require("mysql");

//*Sets up MySQL connection
const connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "",
    database: "burgers_db"
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