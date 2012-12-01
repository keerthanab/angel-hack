
/**
 * Module dependencies.
 */

module.exports = function (app) {
	console.log("Hi from config/routes ;) ");	
	var index_controller = require('../app/controllers/index');
	app.get('/', index_controller.home);
	//app.get('/', function(req, res){
	//	res.send("Hi from config/routes.js")
	//});
 }