const db = require("../config/dbConfig.js");

// GET ALL DOCTORS
const find = () => {
  return db("doctors");
};

// GET ALL DOCTORS
const findDoctor = id => {
  return db("doctors").where("id", id);
};

// GET ALL APPOINTMENTS FOR SPECIFIC DOCTOR
const findAllAppointmentsById = id => {
  return db("appointments").where("doctors_id", id);

  //SQL RAW METHOD
  return db.raw(`SELECT * FROM users
                   WHERE id = ${id}`);
};

// GET ALL APPPOINTMENTS FOR SPECIFIC DOCTOR AND DAY
const findAllAppointmentsByIdAndDate = (id, date) => {
  // return db("appointments").where({ doctors_id: id, date: date });
  return db.raw(`SELECT * FROM appointments
                  WHERE id = ${id} AND date = '${date}'`);
};

// ADD APPOINTMENT
const addAppointment = appointment => {
  return db("appointments").insert(appointment, "id");
};
// DELETE APPOINTMENT
const deleteAppointment = id => {
  return db("appointments")
    .where("id", id)
    .del();
};

module.exports = {
  find,
  findDoctor,
  findAllAppointmentsById,
  findAllAppointmentsByIdAndDate,
  addAppointment,
  deleteAppointment
};
