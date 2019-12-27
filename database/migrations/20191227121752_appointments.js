exports.up = function(knex, Promise) {
  return knex.schema.createTable("doctors", tbl => {
    tbl.increments();

    tbl
      .integer("doctors_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("doctors")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.string("fname").notNullable();
    tbl.string("lname").notNullable();

    tbl.date("date").notNullable();
    tbl.time("time").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("doctors");
};
