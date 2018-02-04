
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let FactSchema = new Schema({
  dailyFactTitle: String,
  dailyFactContent: String,
  dailyFactURL: String,
  factIsLive: Boolean,
  dailyFactDate: { type: Date, default: Date.now }

})

let Fact = mongoose.model('Fact', FactSchema);

module.exports = Fact;
