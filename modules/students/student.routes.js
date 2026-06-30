const router = require("express").Router();
const ctrl = require("./student.controller");

router.post("/", ctrl.createStudent);
router.get("/", ctrl.getAllStudents);

module.exports = router;