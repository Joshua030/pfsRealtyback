const express = require('express');
const propertyMiddleware = require('./middlewares/property.js');
const filterMiddleware = require('./middlewares/filterproperty.js');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/property', propertyMiddleware);
server.use('/filterproperty', filterMiddleware);

server.get('/', (req, res) => {
  res.send('back pf');
});

module.exports = server;