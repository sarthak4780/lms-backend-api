const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("LMS Backend API is running");
});

app.use("/api/v1/students", require("./modules/students/student.routes"));
app.use("/api/v1/courses", require("./modules/courses/course.routes"));
app.use("/api/v1/instructors", require("./modules/instructors/instructor.routes"));
app.use("/api/v1/enrollments", require("./modules/enrollments/enrollment.routes"));
app.use("/api/v1/lessons", require("./modules/lessons/lesson.routes"));

app.get(
  "/api/v1/courses/:id/lessons",
  require("./modules/lessons/lesson.controller").getLessonsByCourse
);

module.exports = app;