const { success, error } = require("../../utils/apiResponse");

let enrollments = [];
let nextId = 1;

exports.createEnrollment = (req, res) => {
  const { studentId, courseId } = req.body;

  if (!studentId || !courseId) {
    return error(res, "studentId and courseId are required", 400);
  }

  const enrollment = {
    id: nextId++,
    studentId,
    courseId,
    createdBy: req.user ? req.user.id : null,
  };

  enrollments.push(enrollment);

  return success(res, enrollment, 201, "Enrollment created successfully");
};

exports.getAllEnrollments = (req, res) => {
  return success(res, enrollments, 200, "Enrollments fetched successfully");
};

exports.deleteEnrollment = (req, res) => {
  const { id } = req.params;

  const index = enrollments.findIndex((e) => e.id === Number(id));

  if (index === -1) {
    return error(res, "Enrollment not found", 404);
  }

  enrollments.splice(index, 1);

  return success(res, null, 200, "Enrollment deleted successfully");
};