// requires
const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv/config');

//require Search Router
const searchRouter = require("./routes/searchRouter");

//search endpoint 
app.use("/search", searchRouter);

// entry point
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
});


// listen on port 3000
app.listen(3000, function () {
  console.log('listening on port 3000!');
});
