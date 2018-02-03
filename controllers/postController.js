
// Includes all CRUD Functions for Post Schema

const db = require('../models');

function index(req, res) {
  db.Post.find({}, function(err, posts) {
    if (err){
      console.log('Error', err);
    }
    res.json(posts);
  });
}

function create(req, res) {
  let post = new db.Post(req.body);


  post.save(function(err, post) {
    if (err) {
      console.log('Error Creating Post', err);
    }

    res.json(post);
  });
}

function show(req, res) {
  db.Post.findById(req.params.post_id, function(err, post) {
    if (err) {
      console.log('Error finding Post by ID', err);
    }
    res.json(post);
  });
}

// TODO: Update/PUT Method

function destroy(req, res) {
  db.Post.findOneAndRemove({_id: req.params.id}, function(err, post) {
    if (err) {
      console.log('Error finding post by ID ', err);
    }
    res.json(post);
  });
}




module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
};
