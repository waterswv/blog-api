let moment = require('moment');
let mongoose = require('mongoose'),
  Schema = mongoose.Schema;



let PostSchema = new Schema({
  postTitle: String,
  postContent: String,
  postURL: String,
  postIsLive: Boolean,
  keywords: [String],
  postDate: { type: Date, default: Date.now },
  sidePostContent: String,
  slug: String,

})

let Post = mongoose.model('Post', PostSchema);

// Function for generating Slugs with RegEx
function slugify(text) {
      let myText = text.toString().toLowerCase()
        .replace(/\s+/g, '-')        // Replace spaces with -
        .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
        .replace(/\-\-+/g, '-')      // Replace multiple - with single -
        .replace(/^-+/, '')          // Trim - from start of text
        .replace(/-+$/, '');         // Trim - from end of text

        let date = moment(this.date)
          , formatted = date.format('YYYY[-]MM[-]DD[-]');

          return formatted + myText;

    }

// Generate the actual slug prior to saving each DB record
PostSchema.pre('save', function (next) {
      this.slug = slugify(this.postTitle);
      next();
    });



module.exports = Post;

// TODO: Choose a image hosting service and generate urls for Post Images
