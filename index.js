// index.js
// SERVER-SIDE JAVASCRIPT
var express = require('express');
var app = express();

//
app.use(express.static('public'));

//
app.get('/', function (req, res) {
   res.send('Hello World!');
 });

 app.listen(process.env.PORT || 3000, function () {
   console.log('Example app listening at http://localhost:3000/');
 });
