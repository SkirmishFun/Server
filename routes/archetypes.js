var express = require('express');
var router = express.Router();

const archetypeDb = require('../db/archetypeDb')
/* GET users listing. */
router.get('/', function(req, res, next) {
  archetypeDb.getAll((err, response) => {
    if(err) console.log(err)
    res.json(response)
  })
})

module.exports = router
