const router = require("express").Router();
const authController = require("./auth.controller");
const { protect } = require("../../middleware/auth");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/profile", protect, authController.getProfile);
router.put("/profile", protect, authController.updateProfile);

module.exports = router;