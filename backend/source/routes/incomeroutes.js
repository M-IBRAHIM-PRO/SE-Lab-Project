const express = require('express');
const incomeroutes = express.Router();
const {createincome} = require('../controllers/incomecontroller');

incomeroutes.post('/',createincome);

module.exports = incomeroutes;