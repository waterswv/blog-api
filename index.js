// main index.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
let express = require('express'),
  bodyParser = require('body-parser');
let expressHbs = require('express-handlebars');
let moment = require('moment');


// const path = require('path');

// generate a new express app and call it 'app'
let app = express();

// View Engine SETUP
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// setup db instance to leverage models
let db = require('./models');

// setup instance of controllers to to leverage the controller functions
let controllers = require('./controllers');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));


// render HTML Routes:
app.get('/', function(req, res, next){
  db.Post.find({}, function(err, post){
    if (err){
      console.log('Error', err);
    }
    let mainPost = post.pop();
    let sidePost = post.reverse().slice(0, 3);
    let updateSidePosts = sidePost.map((post) => {
        let dateForm = moment(post.postDate, moment.HTML5_FMT.DATETIME_LOCAL_MS);
        let newdate = dateForm.format('MMMM Do');
        post.formattedDate = newdate;
        return post;
    });
    db.Fact.find({}, function(err, fact) {
      if (err){
        console.log('Error', err);
      }
      let theFact = fact[fact.length-1];
      db.Word.find({}, function(err, word) {
        if (err){
          console.log('Error', err);
        }
        let theWord = word[word.length-1];
        res.render('home',
          {title: 'Bryan Mierke circa 1983',
          bodycss: 'homepage',
          theTitle: `Bryan Mierke</h1>
          <p>- a software developer by the bay -</p>`,
          posts: mainPost, facts: theFact,
          words: theWord, sidePosts: updateSidePosts});
      });
    });
  });
});

// Render Resume
app.get('/bryan_mierke_res.pdf', function(req, res){
  res.sendFile('views/bryan_mierke_res.pdf', {
    root: __dirname
  });
  console.log(__dirname);
});

app.get('/portfolio', function(req, res){
  res.render('portfolio',
    {title: 'Bryan Mierke circa 1983',
    theTitle: `My Projects</h1>`,
    bodycss: 'no-sidebar'});
});

app.get('/about', function(req, res){
  res.render('about',
    {title: 'Bryan Mierke circa 1983',
    theTitle: `About Me</h1>`,
    bodycss: 'no-sidebar'});
});

app.get('/blog', function(req, res, next) {
  db.Post.find({}, function(err, post) {
    if (err){
      console.log('Error', err);
    }
    let mainPost = post.pop();
    let sidePost = post.reverse();
    let updateSidePosts = sidePost.map((post) => {
      var dateForm = moment(post.postDate, moment.HTML5_FMT.DATETIME_LOCAL_MS);
      let newdate = dateForm.format('MMMM Do');
      post.formattedDate = newdate;
      return post;
    });
    db.Fact.find({}, function(err, fact) {
      if (err){
        console.log('Error', err);
      }
      let theFact = fact[fact.length-1];
      db.Word.find({}, function(err, word) {
        if (err){
          console.log('Error', err);
        }
        let theWord = word[word.length-1];
        res.render('index',
          {title: 'Bryan Mierke circa 1983',
          theTitle: `The Blog</h1>`,
          bodycss: 'right-sidebar',
          posts: mainPost, facts: theFact,
          words: theWord, sidePosts: updateSidePosts});
      });
    });
  });
});

app.get('/:slug', function(req, res, next) {
  db.Post.findOne({'slug': req.params.slug}, function(err, mainPost) {
    if (err){
      console.log('Error', err);
    }
    db.Post.find({}, function(err, post){
      // Skip 1st post & reverse order of remaining posts for sidebar.
      let sidePost = post.filter( post => post.slug !== req.params.slug);
      let sidePosts = sidePost.reverse().slice(0, 3);
      let updateSidePosts = sidePosts.map((post) => {
          let dateForm = moment(post.postDate, moment.HTML5_FMT.DATETIME_LOCAL_MS);
          let newdate = dateForm.format('MMMM Do');
          post.formattedDate = newdate;
          return post;
      });
      db.Fact.find({}, function(err, fact) {
        if (err){
          console.log('Error', err);
        }
        let theFact = fact[fact.length-1];
        db.Word.find({}, function(err, word) {
          if (err){
            console.log('Error', err);
          }
          let theWord = word[word.length-1];
          res.render('singlepost',
            {theTitle: `The Blog</h1>`,
            bodycss: 'right-sidebar',
            posts: mainPost, facts: theFact,
            words: theWord, sidePosts: updateSidePosts});
          });
        });
      });
    });
});

 // API Controller Routes
app.get('/api', controllers.api.index);
app.post('/api', controllers.api.create);

// Post Controller Routes
app.get('/api/post', controllers.post.index);
app.post('/api/post', controllers.post.create);
app.get('/api/post/:post_id', controllers.post.show);
app.delete('/api/post/:id', controllers.post.destroy);

// Word Controller Routes
app.get('/api/word', controllers.word.index);
app.post('/api/word', controllers.word.create);
app.get('/api/word/:word_id', controllers.word.show);
app.delete('/api/word/:id', controllers.word.destroy);

// Fact Controller Routes
app.get('/api/fact', controllers.fact.index);
app.post('/api/fact', controllers.fact.create);
app.get('/api/fact/:fact_id', controllers.fact.show);
app.delete('/api/fact/:id', controllers.fact.destroy);

 /**********
  * SERVER *
  Heroku: https://rocky-waters-28937.herokuapp.com/ | https://git.heroku.com/rocky-waters-28937.git
  **********/


 app.listen(process.env.PORT || 8000, function() {
   console.log("Express Server is up and running on http://localhost:8000/");
 });
