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


// listen on port 
const server_port = process.env.PORT || 5000
app.listen(server_port, function () {
  console.log('listening on port', server_port);
});
