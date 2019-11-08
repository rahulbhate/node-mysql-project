const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
var app = express();

app.use(bodyParser.json());
app.use("/", userRoutes);
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Veda@3!6",
    database: 'project-node',
    multipleStatements: true
  });
  console.log(con);
  con.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
  });
  app.listen(3000);