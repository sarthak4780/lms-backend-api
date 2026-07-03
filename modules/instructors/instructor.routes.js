const router = require("express").Router();

const { protect } = require("../../middleware/auth");
const { authorize } = require("../../middleware/role");

const ctrl = require("./instructor.controller");

router.use(protect);

router.post("/", authorize("admin"), ctrl.createInstructor);
router.get("/", ctrl.getAllInstructors);
router.delete("/:id", authorize("admin"), ctrl.deleteInstructor);

module.exports = router;