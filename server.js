const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://roooss:1WhiskeyChaser@127.0.0.1:27017/');
var db = mongoose.connection;

// Get our API routes
const api = require('./src/api/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, './dist/index.html'));
});

/**
* Get port from environment and store in Express.
*/


const port = process.env.PORT || '4200';
app.set('port', port);

/**
* Create HTTP server.
*/
const server = http.createServer(app);

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, '10.0.0.4', () => console.log(`API running on localhost:${port}`));
