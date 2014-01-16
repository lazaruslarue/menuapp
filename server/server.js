/**
 * Module dependencies.
 */
var express = require('express');
var app = express();

app.set('title', 'menuapp');
app.get('/', function(req, res){
  res.send('hello world');
});

//Start the app by listening on <port>
var port = 3000;
app.listen(port);
console.log('Express app started on port ' + port);

// //Initializing logger
// logger.init(app, passport, mongoose);

// //expose app
module.exports = app;
