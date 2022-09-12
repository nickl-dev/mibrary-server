"use strict";
require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Env variables
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
// Database
const mysql = require('mysql');
// Creating connection to database
const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});
// Reusable query funciton
function mySQLQuery(query, message) {
    connection.query(query, (error, result) => {
        if (error)
            throw error;
        console.log({
            result,
            message
        });
    });
}
// Query strings
const MYSQL_QUERIES = {
    CREATE_TABLE_QUERY: 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email_address VARCHAR(255), password VARCHAR(255))',
    INSERT_USER_QUERY: 'INSERT INTO users (name, email_address, password) VALUES ("Frederick", "frederick_forsyth@gmail.com", "i-like-thrillers-1938")',
    SELECT_USER_QUERY: 'SELECT * FROM users'
};
// Connection to database
connection.connect((err) => {
    if (err)
        throw err;
    console.log('Connected');
    mySQLQuery(MYSQL_QUERIES.INSERT_USER_QUERY, 'User inserted');
    mySQLQuery(MYSQL_QUERIES.SELECT_USER_QUERY, 'User selected');
});
app.listen(PORT, () => console.log(`Server is listening at ${PORT} @ ${new Date(Date.now())}`));
