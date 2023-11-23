const express = require('express');
const dbConnect =require('./db/db');
const bodyparser = require('body-parser');
const usersroute = require('./routes/routes');
const incomeroutes = require('./routes/incomeroutes');
const expense = require('./model/expense');
const expenseroutes = require('./routes/expenseroute');

const app = express();
//dbconnection
dbConnect();

app.use(bodyparser.json())


app.use('/api/users',usersroute);

//income_routes 
app.use('/api/income',incomeroutes);

//expense_route
app.use('./api/expense',expenseroutes);
module.exports = app;