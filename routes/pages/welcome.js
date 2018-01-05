const express = require("express");
const router = express.Router();
const firebase = require("./../../lib/firebase");

/* GET zips page. */
router.get("/", function(req, res, next) {
  res.render("index");
});

module.exports = router;
