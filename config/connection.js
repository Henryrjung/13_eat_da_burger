const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "	z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "odgjoxtblp2r3j1j",
    password: "	w4qv50jjpd573lgy",
    database: "	okrrs4hrzix0eddc"
});

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  module.exports = connection;