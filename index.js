const dotenv = require('dotenv');
dotenv.config();
const port = process.env.SERVER_PORT || 4000;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors);
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, () => console.log(`Server is listening at ${port} @ ${new Date(Date.now())}`));
