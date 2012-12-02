

module.exports = function () {

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectID;

var LoginSchema = new Schema({
    name: {type : String, default : ''}
  , password: {type : String, default : ''}
  , createdAt: {type : Date, default : Date.now}
})

module.exports = mongoose.model('Login', LoginSchema)

exports.save = function(req,res){
	var user_data = {
	  	username: req.params('username')
  	  , password: req.params('password');
	};

	var Login = mongoose.model('Login');
	var login = new Login();	
	login.save( function(error, user_data){
	    if(error){
			console.log("Sorry friend, error in saving :( ");	
	        res.json(error);
	        
	    }
	    else{
	        res.json(user_data);
	        console.log("Yay saved all :) ");
	        mongoose.disconnect();
	      
	    }
	});
	
};

}