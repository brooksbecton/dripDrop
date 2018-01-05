const express = require("express");
const router = express.Router();

const signIn = require("./pages/signIn");
const welcome = require("./pages/welcome");
const zips = require("./pages/zips");

//Pages
router.get("/", welcome);
router.get("/zips", zips);
router.get("/signIn", signIn);

module.exports = router;
