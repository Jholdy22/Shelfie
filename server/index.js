require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const controller = require('./controller');
const massive = require('massive');

const app = express();

app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance)
}).catch(err => consolel.log(err) );

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`port ${ port }`)
})

