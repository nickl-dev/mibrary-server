require('dotenv/config');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database
const mysql = require('mysql');
import { mySQLQuery, MYSQL_QUERIES } from "./api/queries";


// Env variables
const DB_HOST: string = process.env.DB_HOST;
const DB_USER: string =process.env.DB_USER;
const DB_PASSWORD: string = process.env.DB_PASSWORD;
const DB_NAME: string = process.env.DB_NAME;
const PORT: string = process.env.PORT;

// Creating connection to database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
});

// Connection to database
connection.connect((err: any) => {
  if (err) throw err;
  console.log('Connected');

  // mySQLQuery(MYSQL_QUERIES.INSERT_USER_QUERY, 'User inserted');
  mySQLQuery(connection, MYSQL_QUERIES.SELECT_USER_QUERY, 'User selected');
});

app.listen(PORT, () => console.log(`Server is listening at ${PORT} @ ${new Date(Date.now())}`));