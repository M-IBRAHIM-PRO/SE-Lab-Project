const express = require('express');
const routes = express.Router();
const {userscontroller ,fetchUser} = require('../controllers/Usercontroller');

routes.post('/addusers',userscontroller.adduser);
routes.get('/',fetchUser);
module.exports = routes;