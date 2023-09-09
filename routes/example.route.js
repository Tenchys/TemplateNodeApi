const { Router } = require('express');
const { check } = require('express-validator');

const exampleController = require('../controllers/example.controller');
const { reconstructFieldPath } = require('express-validator/src/field-selection');

const router = new Router();

router.get('/', exampleController.GET);

router.post('/', exampleController.POST);


module.exports = router;