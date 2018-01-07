/**
 * usersZip -
 *  Endpoint where a auth'd user's zips are stored.
 *  These are the zips that will be watched.
 */
const express = require("express");
const router = express.Router();

const activate = require("./activate");
const deactivate = require("./deactivate");
const get = require("./get");
const save = require("./save");
const remove = require("./remove");

router.use("/activate", activate);
router.use("/deactivate", deactivate);
router.use("/get", get);
router.use("/save", save);
router.use("/remove", remove);

module.exports = router;
