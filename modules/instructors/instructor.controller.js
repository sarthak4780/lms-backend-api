const { success } = require("../../utils/apiResponse");

let instructors = [];
let nextId = 1;

exports.createInstructor = (req, res) => {
  const instructor = {
    id: nextId++,
    ...req.body
  };

  instructors.push(instructor);

  success(res, instructor, 201);
};

exports.getAllInstructors = (req, res) => {
  success(res, instructors);
};