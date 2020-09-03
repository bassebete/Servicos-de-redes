const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();





app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

//Conf
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

module.exports = app;