// require mongoose & connect
let mongoose = require('mongoose')

// connect mongoose to database location to store data from end-points
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/blogapi_test')

module.exports.Post = require('./post')
module.exports.Word = require('./word')
module.exports.Fact = require('./fact')
