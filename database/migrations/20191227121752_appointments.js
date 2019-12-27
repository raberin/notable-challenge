exports.up = function(knex, Promise) {
  return knex.schema.createTable("appointments", tbl => {
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

    tbl.string("date").notNullable();
    tbl.time("time").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("appointments");
};
