const express = require('express');
const dbConnect =require('./db/db');
const bodyparser = require('body-parser');
const usersroute = require('./routes/routes');
const app = express();
//dbconnection
dbConnect();

app.use(bodyparser.json())
app.use('/api',usersroute);


module.exports = app;