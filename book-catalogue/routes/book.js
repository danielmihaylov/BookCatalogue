var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

module.exports = router;
