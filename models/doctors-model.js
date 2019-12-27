const db = require("../config/dbConfig.js");

// GET ALL DOCTORS
const find = () => {
  return db("doctors");
};

// GET ALL APPOINTMENTS FOR SPECIFIC DOCTOR
const findAllAppointmentsById = id => {
  return db("appointments").where("doctors_id", id);

  //SQL RAW METHOD
  // return db.raw(`SELECT * FROM users
  //                  WHERE id = ${id}`);
};

// GET ALL APPPOINTMENTS FOR SPECIFIC DOCTOR AND DAY

// ADD APPOINTMENT
const addAppointment = appointment => {
  return db("appointments").insert(appointment, id);
};
// DELETE APPOINTMENT
const deleteAppointment = id => {
  return db("appointments")
    .where("id", id)
    .del();
};

module.exports = {
  find,
  findAllAppointmentsById,
  addAppointment,
  deleteAppointment
};
