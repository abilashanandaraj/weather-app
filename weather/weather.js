const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.forecast.io/forecast/822f1a6e1a0f9d820329cc53bb48d07c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to Forecast.io servers.");
        } else if (response.statusCode === 400) {
            callback('Unable to fetch weather');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });

        }
    });
};

module.exports.getWeather = getWeather;