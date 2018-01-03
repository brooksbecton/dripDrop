var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

/* GET home page. */
router.get("/signIn", function(req, res, next) {
  res.render("signIn");
});

module.exports = router;
