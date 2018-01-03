const checkWeather = require('./checkWeather');


function startJobs() {
    checkWeather();
}

module.exports = startJobs;