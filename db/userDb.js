const Knex = require('knex')
const config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
const knex = Knex(config)

getUserByName = (username) => {
  return knex('users')
    .where('username', username)
}

getUserById = (id) => {
  return knex('users')
    .where('user_id', id)
}

module.exports = {
  getUserByName,
  getUserById,
}
