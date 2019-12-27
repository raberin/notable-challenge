exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("appointments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("appointments").insert([
        {
          fname: "Patient",
          lname: "One",
          doctors_id: 1,
          date: "2019-12-27",
          time: "12:30"
        },
        {
          fname: "Patient",
          lname: "Two",
          doctors_id: 1,
          date: "2019-12-27",
          time: "12:45"
        },
        {
          fname: "Patient",
          lname: "Three",
          doctors_id: 2,
          date: "2019-12-27",
          time: "12:30"
        },
        {
          fname: "Patient",
          lname: "Four",
          doctors_id: 2,
          date: "2019-12-28",
          time: "12:30"
        }
      ]);
    });
};
