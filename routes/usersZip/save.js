const express = require("express");
const router = express.Router();
const firebase = require("./../../lib/firebase");

function saveNewUserZip(uid, zip) {
  return new Promise((resolve, reject) => {
    if (!zip) {
      reject(new Error("zip not defined"));
    } else {
      firebase
        .database()
        .ref("users/" + uid + "/zips/" + zip)
        .set({
          dateAdded: Date.now(),
          dateEdited: Date.now(),
          activated: true
        });
      return resolve();
    }
  });
}

/* Save a user's zip. */
router.post("/", (req, res, next) => {
  const uid = res.locals.user.uid;
  const zip = req.body.zip;

  saveNewUserZip(uid, zip)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });
});

module.exports = router;
