require('dotenv').config()
const port = process.env.SERVER_PORT || 4000
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();

app.use(cors)
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send({
    year: new Date(Date.now()).getFullYear(),
    nextYear: this.year + 1
  })
})

app.listen(port, () => console.log(`Server is listening at ${port} @ ${new Date(Date.now())}`))
