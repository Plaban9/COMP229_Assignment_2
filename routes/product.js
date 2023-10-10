var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller');

/* GET product listing. */
router
  .get('/', productController.findAll)
  .post('/', productController.save);

router.get('/:id', productController.find);
router.put('/:id', productController.update);

module.exports = router;
