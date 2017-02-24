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

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log(req.user);
  eventsDb.getAllEvents()
    .then(events => {
      res.json({user: req.user, events})
    })
    .catch(err => {
      res.status(400)
      res.send(err)
    })
})

module.exports = router;
