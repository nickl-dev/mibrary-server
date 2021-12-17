require('dotenv').config()
const port = process.env.SERVER_PORT || 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
    res.send('Hello world')
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

app.listen(port, () => console.log(`Server is listening at ${port} @ ${new Date(Date.now())}`));
