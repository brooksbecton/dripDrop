const express = require("express");
const router = express.Router();
const firebase = require("./../../lib/firebase");

function removeUsersZip(uid, zip) {
  return new Promise((resolve, reject) => {
    if (uid === undefined || zip === undefined) {
      reject(new Error("uid or zip not defined"));
    } else {
      firebase
        .database()
        .ref("users/" + uid + "/zips/" + zip)
        .remove();
      return resolve();
    }
  });
}

/* 
Completely Remove a zip from a user's account
*/
router.post("/", (req, res, next) => {
  const uid = res.locals.user.uid;
  const zip = req.body.zip;

  removeUsersZip(uid, zip)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
});

module.exports = router;
