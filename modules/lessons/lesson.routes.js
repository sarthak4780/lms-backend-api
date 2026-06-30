const router = require("express").Router();
const ctrl = require("./lesson.controller");

router.post("/", ctrl.createLesson);
router.get("/", ctrl.getAllLessons);

module.exports = router;