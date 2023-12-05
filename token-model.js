const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
	token: {
		type:String,
		required:true
	},
	count: {
		type:Number,
		default:0
	},

})

const tokenModel = mongoose.model('token', dataSchema);
module.exports = tokenModel