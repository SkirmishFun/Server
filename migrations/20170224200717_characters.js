
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('characters', (table) => {
    table.increments('character_id')
    table.string('character_name')
    table.integer('archetype_id')
    table.integer('team_id')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('characters')
};
