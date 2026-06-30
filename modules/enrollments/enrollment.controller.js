const { success, error } = require("../../utils/apiResponse");

let enrollments = [];
let nextId = 1;

exports.enroll = (req, res) => {
  const { studentId, courseId } = req.body;

  if (!studentId || !courseId) {
    return error(res, "studentId & courseId required", 400);
  }

  const enrollment = {
    id: nextId++,
    studentId,
    courseId
  };

  enrollments.push(enrollment);

  success(res, enrollment, 201);
};

exports.getAllEnrollments = (req, res) => {
  success(res, enrollments);
};