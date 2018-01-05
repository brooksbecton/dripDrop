const express = require("express");
const router = express.Router();

const signIn = require("./pages/signIn");
const welcome = require("./pages/welcome");
const zips = require("./pages/zips");

//Pages
router.use("/", welcome);
router.use("/zips", zips);
router.use("/signIn", signIn);

module.exports = router;
