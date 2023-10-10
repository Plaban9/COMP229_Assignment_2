var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller');

// Get Product by id - URL: api/product/?name
// router.get('/name', productController.findWithName); 

/* GET product listing. */
router
  .get('/', productController.find) // Get all Products - URL: api/product/
  .post('/', productController.save);

// Get Product by id - URL: api/product/:id
router.get('/:id', productController.findById); 



// Get Product by name - URL: api/product/:id
router.put('/:id', productController.update);


module.exports = router;
