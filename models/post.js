
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let PostSchema = new Schema({
  postTitle: String,
  postContent: String,
  postURL: String,
  postIsLive: Boolean,
  keywords: [String],
  postDate: { type: Date, default: Date.now },
  sidePostContent: String

})

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;

// TODO: Choose a image hosting service and generate urls for Post Images
