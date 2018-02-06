const db = require('../models');


function index(req, res, next) {
  db.Post.find({}, function(err, post) {
    if (err){
      console.log('Error', err);
    }
    db.Fact.find({}, function(err, fact) {
      if (err){
        console.log('Error', err);
      }
      let theFact = fact[0];
      res.render('index', {title: 'Bryan Mierke circa 1983', posts: post, facts: theFact});
    });
  });
};
