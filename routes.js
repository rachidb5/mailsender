const express = require('express');
const route = express.Router();

const { mailSender } = require('./mailSender.js');

route.post('/', mailSender)

module.exports = route;