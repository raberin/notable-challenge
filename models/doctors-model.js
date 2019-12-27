const db = require("../config/dbConfig.js");

// GET ALL DOCTORS
const find = () => {
  return db("doctors");
};
