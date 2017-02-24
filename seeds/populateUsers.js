
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_id: 1, username: ' ', password: '$2a$10$FIyAI407mF3lgStI9TXYzueDpYCpQLN1fdeigCRUc01L1Z7OFi/1G' }
      ]);
    });
};
