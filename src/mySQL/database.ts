require('dotenv/config');
const mysql = require('mysql');

// Env variables
const DB_HOST: string = process.env.DB_HOST;
const DB_USER: string = process.env.DB_USER;
const DB_PASSWORD: string = process.env.DB_PASSWORD;
const DB_NAME: string = process.env.DB_NAME;

// Creating connection to database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

// Reusable query funciton
function mySQLQuery (connection: any, query: string) {
  connection.query(query, (error: any, result: any) => {
    if (error) throw error;
    console.log(result)
    return result;
  })
}

module.exports = { connection, mySQLQuery };