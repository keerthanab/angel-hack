
/*
 * GET home page.
 */

var mongoose = require('mongoose')
	,Login = mongoose.model('Login');

exports.home = function(req, res){
  console.log("Hi from index controller - home ;) ");	
  res.render('home', { title: 'Angel-Hack' });
};

exports.login = function(req, res){
  console.log(req.param('username'));
  // get params and save to mongo! 
 
	var login = new Login(); 
	login.username = req.param('username');
	login.password =  req.param('password');

	login.save( function(error){
	    if(error){
			console.log("Sorry dude, error in saving :( ");	
	        res.json(error);
	        
	    }
	    else{
	        console.log("Yay saved all :) ");
	        //mongoose.disconnect();	      
	    }
	});   
  
};




