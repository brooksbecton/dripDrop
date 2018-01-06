const express = require("express");
const router = express.Router();
const firebase = require("./../../lib/firebase");

function getUsersZips(uid) {
  return new Promise((resolve, reject) => {
    if (!uid) {
      reject(new Error("UID not defined"));
    } else {
      firebase
        .database()
        .ref("users/" + uid + "/zips")
        .once("value", snapshot => {
          resolve(snapshot.val());
        });
    }
  });
}

// Get a user's zips
router.get("/", (req, res, next) => {
  const uid = res.locals.user.uid;
  getUsersZips(uid)
    .then(zips => {
      console.log(zips);
      res.send(JSON.stringify(zips));
    })
    .catch(error => {
      res.status(400).sendStatus(error);
    });
});

module.exports = router;
