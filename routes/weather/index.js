const express = require('express');
const router = express.Router();
const firebase = require('./../../lib/firebase');

const getZipsWeather = require('./lib/getZipsWeather')

/* Save a user's zip. */
router.get('/:zip', (req, res, next) => {
    const zip = req.params.zip
    getZipsWeather(zip)
        .then((weatherData) => {
            res.status(200).send(weatherData)
        })
        .catch((error) => {
            console.error(error)
            res.sendStatus(400);
        });

});

module.exports = router;