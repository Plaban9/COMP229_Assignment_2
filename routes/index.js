var express = require('express');
var router = express.Router();
var apiRouter = require('./api');

/* GET home page. */
router.get('/', function (req, res, next)
{
  res.render('index', { title: 'COMP-229: Assignment 2' });
});

router.use('/api', apiRouter)

module.exports = router;