require('dotenv').config()
const port = process.env.SERVER_PORT || 4000
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => console.log(`Server is listening at ${port} @ ${new Date(Date.now())}`))

// Database
const mysql = require('mysql')

// Database credentials
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Creating connection to database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME
})

// Generic function for database query
function dbQuery (query) {
  connection.query(query, function (err, rows, fields) {
    if (err) console.error(err)
    console.log(rows)
  })
}

// Connection to database
connection.connect()

app.get('/', (req, res) => {
  try {
    const users = dbQuery('SELECT * FROM users')
    res.send(users)
  } catch (err) {
    console.error(err)
  }
})

app.post('/', (req, res) => {
  try {
    console.log(req)
  } catch (err) {
    console.errer(err)
  }
})
