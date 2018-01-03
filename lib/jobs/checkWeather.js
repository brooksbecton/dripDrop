const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
const getZipsWeather = require("./../getZipsWeather");
const firebase = require("./../firebase");

function checkWeather() {
  console.log("Starting to check weather");
  rule.second = 1;

  schedule.scheduleJob(rule, function() {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then(users => {
        users.forEach(usersData => {
          const { zips } = usersData.val();
          Object.keys(zips).forEach(zip => {
            if (zips[zip].activated) {
              const weatherData = getZipsWeather(zip).then(weatherData => {
                const minTemp = weatherData.list[1]["main"]["temp_min"];
                const tempThreshold = 32;

                if (minTemp < tempThreshold) {
                  console.log(minTemp + " is too cold for " + zip);
                } else {
                  console.log(minTemp + " is a IS HOTHOTHOT for " + zip);
                }
              });
            }
          });
        });
      });
  });
}

module.exports = checkWeather;
