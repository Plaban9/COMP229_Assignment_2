var express = require('express');
var router = express.Router();
var categoriesController = require('../controllers/categories.controller');

/* GET categories listing. */
router
  .get('/', categoriesController.find)
  .post('/', categoriesController.save);

router.get('/:_id', categoriesController.find)

module.exports = router;
