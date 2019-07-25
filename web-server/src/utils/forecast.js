const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c25a8cb8907bcbf31af27b9b66e28cf6/' + latitude + ',' + longitude + '?lang=en&units=si';
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to wheather service.');
        } else if (body.error) {
            callback('Unable to find location. Try another search.');
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability}% chance of rain.`);
        }
    });
};

module.exports = forecast;