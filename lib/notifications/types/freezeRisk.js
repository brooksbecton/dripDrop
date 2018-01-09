/**
 * Creates a notification object
 * @param {String} zip
 */
function freezeRiskNotification(zip, weatherData) {
  const temp = weatherData["main"]["temp_min"];
  return {
    type: "freezeRisk",
    body: `${zip} is at risk of freezing. The minimum temperature of ${temp} degrees fahrenheit was reported.`,
    viewed: false,
    dateMade: Date.now(),
    tempRecorded: temp,
    weatherData
  };
}

module.exports = freezeRiskNotification;
