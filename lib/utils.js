var path = require('path');
var db = require('monk')('localhost/test');

var utility = {

  db: function () {
    return function (req, res, next) {
      req.db = db;
      next();
    }
  },

  dirs: function () {
    return function (req, res, next) {
      req.dirs = path.normalize(req.path).slice(1).split(path.sep);
      next();
    }
  }

}

module.exports = utility;
