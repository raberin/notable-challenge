exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("doctors")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("doctors").insert([
        { fname: "Bob", lname: "Thornton" },
        { fname: "Roenz", lname: "Aberin" },
        { fname: "Joey", lname: "Manners" }
      ]);
    });
};
