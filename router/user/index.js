const express = require('express');

const api = express();


api.get('/getUsers', (req, res) => {
    res.status(200).send({
        message: 'Usuarios listos'
    });
});


module.exports = api;