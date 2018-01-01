const express = require('express');
const router = express.Router();
const firebase = require('./../../lib/firebase');

function saveNewUserZip(uid, zip) {
    return new Promise((resolve, reject) => {
        if (uid === undefined || zip === undefined) {
            reject(new Error("UID or Zip not defined"));
        } else {
            firebase.database().ref('usersZip/' + uid + '/' + zip).set({
                dateAdded: new Date(),
                dateEdited: new Date(),
                activated: true
            });
            return resolve();
        }
    })
}

/* Save a user's zip. */
router.post('/', (req, res, next) => {
    const uid = req.body.uid;
    const zip = req.body.zip;

    saveNewUserZip(uid, zip)
        .then(() => {
            res.sendStatus(200)
        })
        .catch((error) => {
            console.error(error)
            res.sendStatus(400);
        });

});

module.exports = router;