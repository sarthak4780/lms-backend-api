const express = require("express");
const cors = require("cors");

const authRoutes = require("./modules/auth/auth.routes");
const studentRoutes = require("./modules/students/student.routes");
const courseRoutes = require("./modules/courses/course.routes");
const instructorRoutes = require("./modules/instructors/instructor.routes");
const enrollmentRoutes = require("./modules/enrollments/enrollment.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("LMS Backend API is running");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/students", studentRoutes);
app.use("/api/v1/courses", courseRoutes);
app.use("/api/v1/instructors", instructorRoutes);
app.use("/api/v1/enrollments", enrollmentRoutes);

module.exports = app;