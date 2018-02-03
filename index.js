// main index.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
let express = require('express'),
  bodyParser = require('body-parser');

// generate a new express app and call it 'app'
let app = express();

// setup db instance to leverage models
let db = require('./models');

// setup instance of controllers to to leverage the controller functions
let controllers = require('./controllers');


// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//
app.get('/', function (req, res) {
   res.send('Nothing to see here...');
 });

 // API Controller Routes
app.get('/api', controllers.api.index);

// Post Controller Routes
app.get('/api/post', controllers.post.index);
app.post('/api/post', controllers.post.create);
app.get('/api/post/:post_id', controllers.post.show);
app.delete('/api/post/:id', controllers.post.destroy);

 /**********
  * SERVER *
  **********/

 app.listen(process.env.PORT || 3000, function() {
   console.log("Express Server is up and running on http://localhost:3000/");
 });
