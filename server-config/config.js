const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/db-config');
const { model } = require('mongoose');


class Server {
    constructor() {
        this.app = express();
        //concentar DB
        //this.conectarDB();
        //middlewares
        this.middlewares();
        //rutas
        this.routes();

    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //Servicor estatico
        this.app.use(express.static('public'));
        //cors
        this.app.use(cors());
        //Lectura y parse del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/api/example", require('../routes/example.route'));
    }

    listen() {
        this.app.listen(process.env.PORT, ()=> {
            console.log(`Api arriba escuchando en http://localhost:${process.env.PORT}`);
        });
    }
}


module.exports = Server;