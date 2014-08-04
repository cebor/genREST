var express = require('express');
var router = express.Router();

var utils = require('../lib/utils');

router.use(utils.db());
router.use(utils.dirs());


/* POST: create */
router.post('/:collection', function (req, res) {
  var collection = req.db.get(req.params.collection);

  collection.insert(req.body, function (err) {
    if (!err) {
      res.status(200).end();
    }
  });
});

/* GET: read */
router.get('/:collection', function (req, res) {
  var collection = req.db.get(req.params.collection);

  collection.find({}, function (err, doc) {
    if (!err) {
      res.json(doc);
    }
  })
});

/* PUT: update */
router.put('/:collection/:id', function (req, res) {
  //TODO
});

/* DELETE: delete */
router.delete('/:collection/:id', function (req, res) {
  //TODO
});

module.exports = router;
