var express = require('express');
var router = express.Router();

const userDb = require('../db/userDb')

/* GET users listing. */
router.get('/', function(req, res, next) {
  userDb.getUserById(1)
    .then((user) => {
      res.json(user)
    })
});

module.exports = router;
