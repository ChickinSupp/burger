// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Open server
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json())

// Set handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('.controllers/burgersController.js');
app.use('/', routes);

app.listenerCount(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});