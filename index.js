const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, err => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
    console.log('COnnected to database: ' + config.db);
  }
});



// middleware
app.use(express.static(__dirname + '/client/dist/'));



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
})

app.listen(8080, () => {
  console.log('listening on port: 8080');
});