## Prereq Setup

### Please read through README.md in repo for details on setting up postgres and .env files/knexile

1. npm install
2. setup postgres backend
3. Modify .env file to suit your backend
4. npm run server
5. `npx knex migrate:latest`
6. `npx knex seed:run`
7. Test routes

## Routes

GET http://localhost:5000/api/doctors Returns list of doctors

GET http://localhost:5000/api/doctors/```:id```/appointments Returns list of appointments for a specific doctor
Requires: Doctors ID

GET http://localhost:5000/api/doctors/```:id```/appointments/date```?date=YYYY-MM-DD```
Returns list of appointments for a specific doctor for a specific day
Requires: Doctors ID and date query string

POST http://localhost:5000/api/doctors/appointments Creates an appointment for a specific doctor
Requires: `{ doctors_id, fname, lname, date : YYYY-MM-DD, time : HH:MM:SS }`

DELETE POST http://localhost:5000/api/doctors/appointments/```:id``` Deletes an appointment
Requires: appointment id
