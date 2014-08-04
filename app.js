var express = require('express');
var bodyParser = require('body-parser');

var crud = require('./routes/crud');

var app = express();

app.use(bodyParser.json());

app.use('/', crud);

module.exports = app;
