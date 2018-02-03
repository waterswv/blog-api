
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let WordSchema = new Schema({
  dailyWord: String,
  dailyWordDefinition: String,
  dailyWordURL: String,
  wordIsLive: Boolean,
  dailyWordDate: Date

})

let Word = mongoose.model('Word', WordSchema);

module.exports = Word;
