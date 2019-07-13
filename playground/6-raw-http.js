const https = require('https');

const url = 'https://api.darksky.net/forecast/c25a8cb8907bcbf31af27b9b66e28cf6/-58.38194,-34.59972?lang=en&units=si';

const request = https.request(url, (response) => {
    let data = '';

    // Request data can come in chunks, so we need to stick them together
    // Request sends binary data, so we need to convert to string
    response.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body);
    });
});

// Error handler for the request
request.on('error', (error) => {
    console.log('Error:', error);
});

request.end();

