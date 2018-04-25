const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3000 || process.env.PORT()
// Connecting to Mongoose

mongoose.connect('mongodb://localhost/bookstore');
const db = mongoose.connection

// landing page route
app.get('/', function(req, res, err) {
	res.send('Please use /api/books or /api/genre');
});

app.listen(PORT);
console.log('Listening on Port: ' + PORT )