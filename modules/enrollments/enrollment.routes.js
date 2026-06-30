const router = require("express").Router();
const ctrl = require("./enrollment.controller");

router.post("/", ctrl.enroll);
router.get("/", ctrl.getAllEnrollments);

module.exports = router;