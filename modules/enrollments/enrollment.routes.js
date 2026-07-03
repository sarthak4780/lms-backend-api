const router = require("express").Router();

const { protect } = require("../../middleware/auth");
const { authorize } = require("../../middleware/role");

const ctrl = require("./enrollment.controller");

router.use(protect);

router.post("/", authorize("admin", "instructor"), ctrl.createEnrollment);
router.get("/", ctrl.getAllEnrollments);
router.delete("/:id", authorize("admin"), ctrl.deleteEnrollment);

module.exports = router;