const express = require('express');
const route = express.Router();

const { mailSender, tester } = require('./mailSender.js');

route.post('/', mailSender)
route.get('/teste', tester)

module.exports = route;