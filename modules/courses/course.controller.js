const { success } = require("../../utils/apiResponse");

let courses = [];
let nextId = 1;

exports.createCourse = (req, res) => {
  const course = {
    id: nextId++,
    ...req.body
  };

  courses.push(course);

  success(res, course, 201);
};

exports.getAllCourses = (req, res) => {
  success(res, courses);
};