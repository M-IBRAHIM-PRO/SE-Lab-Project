const express = require('express');
const router = express.Router();
const userscontroller = require('../controllers/Usercontroller');
//const budgetcontroller = require('../controllers/budgetcontroller');
router.post('/addusers',userscontroller.adduser);

module.exports = router;