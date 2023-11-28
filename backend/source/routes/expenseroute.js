const express = require('express');
const incomeroutes = express.Router();
const expenseroutes = express.Router();
const {  create_expense,fetch_expense,fetch_one_expense,update_expense,delete_expense} = require('../controllers/incomecontroller');
const expense = require('../model/expense');

expenseroutes.post('/',create_expense);
expenseroutes.get('/',fetch_expense);
expenseroutes.get('./:id' , fetch_one_expense);
expenseroutes.put('./:id',update_expense);
expenseroutes.delete('./:id',delete_expense);
module.exports = expenseroutes;