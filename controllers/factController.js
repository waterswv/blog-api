
// Includes all CRUD Functions for Post Schema

const db = require('../models');

function index(req, res) {
  db.Fact.find({}, function(err, facts) {
    if (err){
      console.log('Error', err);
    }
    res.json(facts);
  });
}

function create(req, res) {
  let fact = new db.Fact(req.body);


  fact.save(function(err, fact) {
    if (err) {
      console.log('Error Creating Fact', err);
    }

    res.json(fact);
  });
}

function show(req, res) {
  db.Fact.findById(req.params.fact_id, function(err, fact) {
    if (err) {
      console.log('Error finding Fact by ID', err);
    }
    res.json(fact);
  });
}

// TODO: Update/PUT Method

function destroy(req, res) {
  db.Fact.findOneAndRemove({_id: req.params.id}, function(err, fact) {
    if (err) {
      console.log('Error finding fact by ID ', err);
    }
    res.json(fact);
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
};
