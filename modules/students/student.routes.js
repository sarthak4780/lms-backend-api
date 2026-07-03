const router = require("express").Router();
const { protect } = require("../../middleware/auth");
const ctrl = require("./student.controller");

// Every student route now needs JWT token
router.use(protect);

router.post("/", ctrl.createStudent);
router.get("/", ctrl.getAllStudents);

module.exports = router;