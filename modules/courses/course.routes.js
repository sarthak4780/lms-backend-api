const router = require("express").Router();
const ctrl = require("./course.controller");

router.post("/", ctrl.createCourse);
router.get("/", ctrl.getAllCourses);

module.exports = router;