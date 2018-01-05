const express = require("express");
const router = express.Router();
const firebase = require("./../../lib/firebase");

/* GET zips page. */
router.get("/zips", function(req, res, next) {
  res.render("zips");
});

module.exports = router;
