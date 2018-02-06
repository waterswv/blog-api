// main index.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
let express = require('express'),
  bodyParser = require('body-parser');
let expressHbs = require('express-handlebars');

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

// // Prevent CORS errors
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
//
//   //Remove caching
//   res.setHeader('Cache-Control', 'no-cache');
//   next();
// });

// render HTML Routes:
app.get('/', function(req, res, next){
  db.Post.find({}, function(err, post){
    if (err){
      console.log('Error', err);
    }
    let mainPost = post.pop();
    let sidePost = post.reverse().slice(0, 3);
    db.Fact.find({}, function(err, fact) {
      if (err){
        console.log('Error', err);
      }
      let theFact = fact[0];
      db.Word.find({}, function(err, word) {
        if (err){
          console.log('Error', err);
        }
        let theWord = word[0];
        res.render('home',
          {title: 'Bryan Mierke circa 1983',
          bodycss: 'homepage',
          theTitle: `<a href="/">Bryan Mierke</a></h1>
          <p>- a software developer by the bay -</p>`,
          posts: mainPost, facts: theFact,
          words: theWord, sidePosts: sidePost});
      });
    });
  });
});

// Render Resume
app.get('/bryan_mierke.pdf', function(req, res){
  res.sendFile('views/bryan_mierke.pdf', {
    root: __dirname
  });
  console.log(__dirname);
});

app.get('/portfolio', function(req, res){
  res.render('portfolio',
    {title: 'Bryan Mierke circa 1983',
    theTitle: `<a href="/">My Projects</a></h1>
    `,
    bodycss: 'no-sidebar'});
});

app.get('/blog', function(req, res, next) {
  db.Post.find({}, function(err, post) {
    if (err){
      console.log('Error', err);
    }
    let mainPost = post.pop();
    let sidePost = post.reverse().slice(0, 3);
    db.Fact.find({}, function(err, fact) {
      if (err){
        console.log('Error', err);
      }
      let theFact = fact[0];
      db.Word.find({}, function(err, word) {
        if (err){
          console.log('Error', err);
        }
        let theWord = word[0];
        res.render('index',
          {title: 'Bryan Mierke circa 1983',
          theTitle: `<a href="/">The Blog</a></h1>`,
          bodycss: 'right-sidebar',
          posts: mainPost, facts: theFact,
          words: theWord, sidePosts: sidePost});
      });
    });
  });
});

app.get('/:post_id', function(req, res, next) {
  db.Post.findById(req.params.post_id, function(err, mainPost) {
    if (err){
      console.log('Error', err);
    }
    db.Post.find({}, function(err, post){
      // Skip 1st post & reverse order of remaining posts for sidebar.
      let sidePost = post.reverse().slice(1, 4);
      db.Fact.find({}, function(err, fact) {
        if (err){
          console.log('Error', err);
        }
        let theFact = fact[0];
        db.Word.find({}, function(err, word) {
          if (err){
            console.log('Error', err);
          }
          let theWord = word[0];
          res.render('singlepost',
            {theTitle: `<a href="/">The Blog</a></h1>`,
            bodycss: 'right-sidebar',
            posts: mainPost, facts: theFact,
            words: theWord, sidePosts: sidePost});
          });
        });
      });
    });
});

 // API Controller Routes
app.get('/api', controllers.api.index);

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
