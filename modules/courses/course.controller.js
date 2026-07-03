const { success, error } = require("../../utils/apiResponse");

let courses = [];
let nextId = 1;

exports.createCourse = (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return error(res, "Course title is required", 400);
  }

  const course = {
    id: nextId++,
    title,
    description: description || "",
    createdBy: req.user ? req.user.id : null,
  };

  courses.push(course);

  return success(res, course, 201, "Course created successfully");
};

exports.getAllCourses = (req, res) => {
  return success(res, courses, 200, "Courses fetched successfully");
};

exports.updateCourse = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return error(res, "Course not found", 404);
  }

  if (title) course.title = title;
  if (description) course.description = description;

  return success(res, course, 200, "Course updated successfully");
};

exports.deleteCourse = (req, res) => {
  const { id } = req.params;

  const index = courses.findIndex((c) => c.id === Number(id));

  if (index === -1) {
    return error(res, "Course not found", 404);
  }

  courses.splice(index, 1);

  return success(res, null, 200, "Course deleted successfully");
};