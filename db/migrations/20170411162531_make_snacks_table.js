exports.up = function(knex) {
  return knex.schema.createTable('snacks', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.text('img_url').notNullable().defaultTo('');
    table.text('review_description').notNullable();
    table.integer('rating');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('snacks');
};
