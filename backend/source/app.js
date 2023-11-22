const express = require('express');
const dbConnect =require('./db/db');
const bodyparser = require('body-parser');
const usersroute = require('./routes/routes');
const incomeroutes = require('./routes/incomeroutes');
const app = express();
//dbconnection
dbConnect();

app.use(bodyparser.json())


app.use('/api/users',usersroute);

//incomeroutes 
app.use('/api/income',incomeroutes);

module.exports = app;