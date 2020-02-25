const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findTen: function(req, res) {
    db.Question
      .find({"answered": "null"})
      .limit(10)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateWithAnswer: function(req, res) {
    db.Question
      .findByIdAndUpdate(req.body.id, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
