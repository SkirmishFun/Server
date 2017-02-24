
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', (table) => {
    table.increments('user_id')
    table.string('username')
    table.string('password')
  })
};

exports.down = function(knex, Promise) {

};
