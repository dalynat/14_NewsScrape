var db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Headline
// Find all headlines
      .find(req.query)
// Sort the headlines
      .sort({ date: -1 })
// Send headlines to user
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },
// Delete selected headline
  delete: function(req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  },
// Update selected headline
  update: function(req, res) {
    db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbHeadline) {
      res.json(dbHeadline);
    });
  }
};
