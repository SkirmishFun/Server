
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('archetypes').del()
    .then(function () {
      // Inserts seed entries
      return knex('archetypes').insert([
        {archetype_id: 1, archetype_name: 'Warrior', power: 3, health: 3, stamina: 1, mana: 1},
        {archetype_id: 2, archetype_name: 'Rogue', power: 1, health: 1, stamina: 3, mana: 3},
        {archetype_id: 3, archetype_name: 'Wizard', power: 3, health: 1, stamina: 1, mana: 3},
        {archetype_id: 4, archetype_name: 'Monk', power: 1, health: 3, stamina: 3, mana: 3}
      ]);
    });
};
