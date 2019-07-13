const request = require('request');

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/c25a8cb8907bcbf31af27b9b66e28cf6/' + lat + ',' + long + '?lang=es&units=si';
    
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to wheather service.');
        } else if (response.body.error) {
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, {
                data: `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is ${response.body.currently.precipProbability}% chance of rain.`
            });
        }
    });
};

module.exports = forecast;