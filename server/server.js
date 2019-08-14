const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
var app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

//Configuring express server
app.use(bodyparser.json());

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'demo',
  password: '',
  database: 'test',
  multipleStatements: true
});

mysqlConnection.connect(err => {
  if (!err) console.log('Connection Established Successfully');
  else console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8081;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/customers', (req, res) => {
  mysqlConnection.query('SELECT * FROM customers;', (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log(err);
  });
});
