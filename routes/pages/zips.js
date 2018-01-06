const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const firebase = require("./../../lib/firebase");

/* GET zips page. */
router.get("/:uid", function(req, res, next) {
  const uid = req.params.uid;

  fetch(process.env.baseURL + "api/usersZip/get/" + uid)
    .then(resp =>
      resp.text().then(zips => res.render("zips", { zips: JSON.parse(zips) }))
    )
    .catch(e => res.render(e));
});

module.exports = router;
