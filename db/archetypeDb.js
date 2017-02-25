const Knex = require('knex')
const config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
const knex = Knex(config)

module.exports = {
  getAll
}

function getAll(cb){
  knex('archetypes')
    .select('*')
    .then(res => {
      cb(null, res)
    })
    .catch(err => {
      cb(err, null)
    })
}
