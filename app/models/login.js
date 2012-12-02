
var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.ObjectID

var LoginSchema = new Schema({
    username: {type : String, default : ''}
  , password: {type : String, default : ''}
  , createdAt: {type : Date, default : Date.now}
})

module.exports = mongoose.model('Login', LoginSchema)

