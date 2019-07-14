const path = require('path');
const express = require('express');
const hbs = require('hbs');

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public'));

const app = express();

// Express paths config.
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Set Handelbars view engine and views location.
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Use the route defined for static content, 
// This will override any matching route after it.
app.use(express.static(publicDirectoryPath));


// Routes get evaluated in order
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Lando'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Lando'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Lando',
        message: 'This is a help text.'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        location: 'Buenos Aires, Argentina',
        forecast: 'It is currently 9 degrees out. There is 0% chance of rain.'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Error',
        name: 'Lando',
        message: 'Help article not found.'
    })
});


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Lando',
        message: 'Page not found.'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});