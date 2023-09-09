require('dotenv').config();

const Server = require('./server-config/config');

const server = new Server();

server.listen();