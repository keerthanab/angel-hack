
/**
 * Module dependencies.
 */


var express = require('express')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')

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

  
//To render in html do these steps
  // disable layout
  //app.set("view options", {layout: false});
  // make a custom html template
  //app.engine('html', require('ejs').renderFile);

});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//require('./config/development');

mongoose.connect('mongodb://localhost/angel');

require('./app/models/login');


// Bootstrap models
/*var models_path = __dirname + '/app/models'
  , model_files = fs.readdirSync(models_path)
model_files.forEach(function (file) {
  require(models_path+'/'+file)
})*/

require('./config/routes')(app); //bootstrap routes right away!

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server  on port " + app.get('port'));
});
