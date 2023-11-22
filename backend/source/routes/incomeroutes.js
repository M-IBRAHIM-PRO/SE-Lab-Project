const express = require('express');
const incomeroutes = express.Router();
const {createincome,fetchincome, fetch_one_income,update_income,delete_income} = require('../controllers/incomecontroller');

incomeroutes.post('/',createincome);
incomeroutes.get('/',fetchincome);
incomeroutes.get('./:id' , fetch_one_income);
incomeroutes.put('./:id',update_income);
incomeroutes.delete('./:id',delete_income);
module.exports = incomeroutes;