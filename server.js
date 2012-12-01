
/**
 * Module dependencies.
 */


var express = require('express')
  , http = require('http')
  , path = require('path');

var app = module.exports = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/app/views')
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({uploadDir:'./public/uploads'})); //temporary directory storage for files! 
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

require('./config/routes')(app); //bootstrap routes right away!

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server  on port " + app.get('port'));
});