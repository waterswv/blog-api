
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let PostSchema = new Schema({
  postTitle: String,
  postContent: String,
  postURL: String,
  postIsLive: Boolean,
  keywords: [String],
  postDate: Date,
  sidePostContent: String

})

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;
