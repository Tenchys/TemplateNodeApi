const {response} = require('express');


 class ExampleController {

    constructor() {
        this.GET  = async (req, res = response) => {
            res.json({
                metodo: 'example - GET'
            });
        }

        this.POST = async (req, res = response) => {
            res.json({
                metodo: 'example - post'
            });
        }
    }
    

}

const exampleController = new ExampleController();



module.exports = exampleController;