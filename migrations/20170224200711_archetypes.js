
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('archetypes', (table) => {
    table.increments('archetype_id')
    table.string('archetype_name')
    table.integer('power')
    table.integer('health')
    table.integer('stamina')
    table.integer('mana')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('archetypes')
};
