const router = require("express").Router();
const ctrl = require("./instructor.controller");

router.post("/", ctrl.createInstructor);
router.get("/", ctrl.getAllInstructors);

module.exports = router;