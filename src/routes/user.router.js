const { getAll, create, getOne, remove, update, login } = require('../controllers/user.controllers');
const express = require('express');

const routerUser = express.Router();



routerUser.route('/')
    .get(getAll)
    .post(create);

routerUser.route('/login')  //----> users/login
    .post(login)


routerUser.route('/:id') //----> login/2/4
    .get(getOne)
    .delete(remove)
    .put(update);





module.exports = routerUser;