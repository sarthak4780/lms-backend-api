const router = require("express").Router();

const { protect } = require("../../middleware/auth");
const { authorize } = require("../../middleware/role");

const ctrl = require("./course.controller");

router.get("/", protect, ctrl.getAllCourses);

router.post(
  "/",
  protect,
  authorize("admin", "instructor"),
  ctrl.createCourse
);

router.put(
  "/:id",
  protect,
  authorize("admin", "instructor"),
  ctrl.updateCourse
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  ctrl.deleteCourse
);

module.exports = router;