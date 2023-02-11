const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();
// const { connectDB } = require('./db');

app.use(cors());
app.use(bodyParser.json());

// connectDB();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
    // console.log(process.env)
})
