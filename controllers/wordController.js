
// Includes all CRUD Functions for Post Schema

const db = require('../models');

function index(req, res) {
  db.Word.find({}, function(err, words) {
    if (err){
      console.log('Error', err);
    }
    res.json(words);
  });
}

function create(req, res) {
  let word = new db.Word(req.body);


  word.save(function(err, word) {
    if (err) {
      console.log('Error Creating Word', err);
    }

    res.json(word);
  });
}

function show(req, res) {
  db.Word.findById(req.params.word_id, function(err, word) {
    if (err) {
      console.log('Error finding Word by ID', err);
    }
    res.json(word);
  });
}

// TODO: Update/PUT Method

function destroy(req, res) {
  db.Word.findOneAndRemove({_id: req.params.id}, function(err, word) {
    if (err) {
      console.log('Error finding word by ID ', err);
    }
    res.json(word);
  });
}




module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
};
