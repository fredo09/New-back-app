const express = require('express');

const api = express();

//Paths 
const usersPaths = require('./user');

//usando Pahts
api.use(usersPaths);


module.exports = api;