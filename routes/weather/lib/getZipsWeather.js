var request = require('request');

function getZipsWeather(zip) {
    return new Promise((resolve, reject) => {
        const url = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zip + '&units=imperial&APPID=' + process.env.openWeatherAPIKey
        //Query Weather
        return request(url, (error, response, body) => {
            if (!error) {
                resolve(body);
            }
            else {
                reject(new Error(error))
            }
        });
    })
}

module.exports = getZipsWeather