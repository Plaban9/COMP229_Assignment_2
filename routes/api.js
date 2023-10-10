var express = require('express');
var router = express.Router();


var usersRouter = require('./users');
router.use('/users', usersRouter);

var productRouter = require('./product');
router.use('/product', productRouter);

var categoriesRouter = require('./categories');
router.use('/categories', categoriesRouter);

module.exports = router;