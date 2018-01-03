const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
const getZipsWeather = require("./../../routes/weather/lib/getZipsWeather");

function checkWeather() {
  console.log("Starting to check weather");
  rule.second = 1;

  schedule.scheduleJob(rule, function() {
    const weatherData = getZipsWeather("38358").then(weatherData => {
      const minTemp = weatherData.list[1]["main"]["temp_min"];
      const tempThreshold = 32;

      if (minTemp < tempThreshold) {
        console.log(minTemp + "is too cold!");
      }
    });
  });
}

module.exports = checkWeather;
