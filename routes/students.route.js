const express = require("express");
const router = express.Router();

const {getStudents, saveStudent} = require("../controllers/students.controller");

router.get("/students", getStudents);

router.post("/students", saveStudent);

module.exports = router;
