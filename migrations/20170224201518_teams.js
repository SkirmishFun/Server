
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('teams', (table) => {
    table.increments('team_id')
    table.string('team_name')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teams')
};
