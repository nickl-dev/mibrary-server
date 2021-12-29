require('dotenv').config()
const port = process.env.SERVER_PORT || 4000
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
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

// Connection to database
connection.connect()

app.post('/', (req, res) => {
  const { email, password } = req.body
    connection.query(`SELECT * FROM users WHERE email = ${email} AND password = ${password}`, (err, rows, fields) => {
      if (err) {
        throw err
      } else {
        res.send('User exists')
      }
      console.log(email, password)
    })
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(200).send('Posted')
})
