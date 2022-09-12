require('dotenv').config();
const port = process.env.SERVER_PORT || 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is listening at ${port} @ ${new Date(Date.now())}`));

// Database
const mysql = require('mysql');

// Database credentials
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME

// Creating connection to database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

// Reusable query funciton
function mySQLQuery (query, message) {
  connection.query(query, (error, result) => {
    if (error) throw error;

    console.log({
      result, 
      message
    })
  })
}

// Query strings
const CREATE_TABLE_QUERY = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email_address VARCHAR(255), password VARCHAR(255))';
const INSERT_USER_QUERY = 'INSERT INTO users (name, email_address, password) VALUES ("Frederick", "frederick_forsyth@gmail.com", "i-like-thrillers-1938")';

// Connection to database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected');

  // if (mySQLQuery(CREATE_TABLE_QUERY, 'Table created');

  mySQLQuery(INSERT_USER_QUERY, 'User inserted');
});