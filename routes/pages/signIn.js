const express = require("express");
const router = express.Router();

/* GET sign in page. */
router.get("/", function(req, res, next) {
  res.render("signIn");
});

module.exports = router;
