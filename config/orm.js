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
      let value =ob[key];
      if(Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
}

const orm = {
  
}