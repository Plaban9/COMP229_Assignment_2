var express = require('express');
var router = express.Router();
var productController = require('../controllers/product.controller');

// Get Product by id - URL: api/product/?name
// router.get('/name', productController.findWithName); 

/* GET product listing. */
// Get all Products - URL: api/product/ and Products with occurences of chracter in name
router.get('/', productController.find);
  
// Get Product by id - URL: api/product/:id
router.get('/:id', productController.findById); 

// Create Product by create key
router.post('/', productController.create);

// Get Product by name - URL: api/product/:id
router.put('/:id', productController.update);


module.exports = router;
