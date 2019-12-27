const router = require("express").Router();

const doctorsDB = require("../models/doctors-model");

// GET ALL DOCTORS
router.get("/", async (req, res) => {
  try {
    const doctors = await doctorsDB.find();
    res.status(200).json(doctors);
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

// GET ALL APPPOINTMENTS FOR SPECIFIC DOCTOR
router.get("/:id/appointments", async (req, res) => {
  let doctorsId = req.params.id;
  try {
    let doctor = await doctorsDB.findDoctor(doctorsId);
    let getAppoinments = await doctorsDB.findAllAppointmentsById(doctorsId);
    console.log(doctor);
    res.status(200).json({ doctor, calendar: getAppoinments });
  } catch (err) {
    res.status({ err: "The appointment information could not be retrieved" });
  }
});

// GET ALL APPOINTMENTS FOR SPECIFIC DOCTOR FOR SPECIFIC DAY
router.get("/:id/appointments/date", async (req, res) => {
  let doctorsId = req.params.id;
  let specificDate = req.query.date; // FORMAT YYYY-MM-DD
  try {
    let doctor = await doctorsDB.findDoctor(doctorsId);
    let getAppoinments = await doctorsDB.findAllAppointmentsByIdAndDate(
      doctorsId,
      specificDate
    );
    console.log(getAppoinments);
    console.log(doctor);
    res.status(200).json({ doctor, calendar: getAppoinments.rows });
  } catch (err) {
    res.status({ err: "The appointment information could not be retrieved" });
  }
});

//  ADD APPOINTMENT
router.post("/appointments", async (req, res) => {
  let newAppointment = req.body;
  console.log(newAppointment);

  try {
    const addAppointment = await doctorsDB.addAppointment(newAppointment);
    res.status(201).json(addAppointment);
  } catch (err) {
    res.status(500).json({ err: "Error in adding appointment" });
  }
});

// DELETE APPOINTMENT
router.delete("/appointments/:id", async (req, res) => {
  const appointmentId = req.params.id;
  try {
    const deleting = await doctorsDB.deleteAppointment(appointmentId);
    res.status(204).json(deleting);
  } catch (err) {
    res.status(500).json({ err: "Error in deleting appointment" });
  }
});

module.exports = router;
