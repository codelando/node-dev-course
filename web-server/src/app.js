const path = require('path');
const express = require('express');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

// Use the route defined for static content, this will override any matching route after it.
app.use(express.static(publicDirectoryPath));

app.get('/weather', (req, res) => {
    res.send({
        location: 'Buenos Aires, Argentina',
        forecast: 'It is currently 9 degrees out. There is 0% chance of rain.'
    });
});


app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});