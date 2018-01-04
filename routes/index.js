var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

/* GET sign in page. */
router.get("/signIn", function(req, res, next) {
  res.render("signIn");
});

/* GET zips page. */
router.get("/zips", function(req, res, next) {
  res.render("zips");
});

module.exports = router;
