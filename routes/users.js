var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt')
var passport = require('../passport')

const userDb = require('../db/userDb')

/* GET users listing. */
router.get('/', function(req, res, next) {
  userDb.getUserById(1)
    .then((user) => {
      res.json(user)
    })
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({user_id: req.user.user_id, username: req.user.username})
})

module.exports = router;
