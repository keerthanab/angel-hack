
var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var LoginSchema = new Schema({
    name: {type : String, default : ''}
  , password: {type : String, default : ''}
  , createdAt: {type : Date, default : Date.now}
})

mongoose.model('Login', LoginSchema)