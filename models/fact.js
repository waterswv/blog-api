
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let FactSchema = new Schema({
  dailyFactTitle: String,
  dailyFactContent: String,
  dailyFactURL: String,
  FactIsLive: Boolean,
  dailyFactDate: Date

})

let Fact = mongoose.model('Fact', FactSchema);

module.exports = Fact;
