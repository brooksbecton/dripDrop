const schedule = require("node-schedule");
const rule = new schedule.RecurrenceRule();
const getZipsWeather = require("./../getZipsWeather");
const firebase = require("./../firebase");

const freezeRiskNotification = require("./../notifications/types/freezeRisk");
const saveNotification = require("./../notifications/saveNotification");

function checkWeather() {
  console.log("Starting to check weather");
  rule.second = 1;

  schedule.scheduleJob(rule, function() {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then(snapshot => {
        const users = snapshot.val();
        Object.keys(users).forEach(uid => {
          const { zips } = users[uid];
          Object.keys(zips).forEach(zip => {
            if (zips[zip].activated) {
              const weatherData = getZipsWeather(zip).then(weatherData => {
                const minTemp = weatherData.list[0]["main"]["temp_min"];
                const tempThreshold = 32;

                if (minTemp < tempThreshold) {
                  const notification = freezeRiskNotification(
                    zip,
                    weatherData.list[0]
                  );
                  saveNotification(uid, notification);
                }
              });
            }
          });
        });
      });
  });
}

module.exports = checkWeather;
