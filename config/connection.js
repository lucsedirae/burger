//*Dependencies
const mysql = require("mysql");

let connection;

//*Sets up MySQL connection for remote database or local environment

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"    
    });
};

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