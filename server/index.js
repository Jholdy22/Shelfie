const bodyParser = require('body-parser');
const express = require('express');
const controller = require('./controller');

const app = express();
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`port ${ port }`)
})

