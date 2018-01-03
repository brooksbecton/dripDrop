const schedule = require('node-schedule');
const rule = new schedule.RecurrenceRule();

function checkWeather() {
    console.log("Starting to check weather")
    rule.second = 1;

    schedule.scheduleJob(rule, function () {

        console.log("Checking the weather");
    });
}

module.exports = checkWeather;