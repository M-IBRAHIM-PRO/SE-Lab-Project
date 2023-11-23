const express = require('express');
const routes = express.Router();
const userscontroller = require('../controllers/Usercontroller');

routes.post('/addusers', userscontroller.adduser);
routes.get('/', userscontroller.fetchUser);
module.exports = routes;