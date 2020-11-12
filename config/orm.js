//*Dependencies
const connection = require("./connection");

//*Helper function:
//*Question mark function takes in an integer representing number of values needed in a SQL query. It creates a string with that many question marks.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//*Helper function
//*Converts key/value pairs into SQL syntax
function objToSql(ob) {
  let arr = [];

  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

//*The ORM defines dynamic SQL query strings that can be accessed from elsewhere in the app. This 
const orm = {
  all: function (tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  create: function (table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, vals, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  update: function (table, objColVals, condition, cb) {
    let queryString = "UPDATE" + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },

  delete: function(table, col, val, cb) {
    let queryString = "DELETE FROM " + table;
    
    queryString += " WHERE ";
    queryString += col;
    queryString += " = ";
    queryString += val;

    console.log(queryString);
    connection.query(queryString, function(err, res){
      if (err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;
