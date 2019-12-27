exports.up = function(knex, Promise) {
  return knex.schema.createTable("doctors", tbl => {
    tbl.increments();

    tbl.string("fname").notNullable();
    tbl.string("lname").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("doctors");
};
