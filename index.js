/* ===================
   Import Node Modules
=================== */
const express = require('express'); // Fast, unopinionated, minimalist web framework for node.
const app = express(); // Initiate Express Application
const router = express.Router(); // Creates a new router object.
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
const path = require('path'); // NodeJS Package for file paths
const authentication = require('./routes/authentication')(router); // Import Authentication Routes
const blogs = require('./routes/blogs')(router); // Import Blog Routes
const bodyParser = require('body-parser'); // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
const morgan = require('morgan');

const port = process.env.PORT || 8080;

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, err => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('COnnected to database: ' + config.db);
  }
});



// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(morgan('dev'));

// Set static dir
app.use(express.static(__dirname + '/public/'));

// Routes
app.use('/authentication', authentication);
app.use('/blogs', blogs); // Use Blog routes in application



// Connect server to Angular 2 Index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.listen(port, () => {
  console.log('listening on port: ' + port);
});