const express = require('express');
const propertyMiddleware = require('./middlewares/property.js');
const filterMiddleware = require('./middlewares/filterproperty.js');


const server = express();

server.use(express.json());

server.use('/property', propertyMiddleware);
server.use('/filterproperty', filterMiddleware);

server.get('/', (req, res) => {
  res.send('back pf');
});

module.exports = server;