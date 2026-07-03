const { success, error } = require("../../utils/apiResponse");

let instructors = [];
let nextId = 1;

exports.createInstructor = (req, res) => {
  const { name, email, expertise } = req.body;

  if (!name || !email) {
    return error(res, "Name and email are required", 400);
  }

  const instructor = {
    id: nextId++,
    name,
    email,
    expertise: expertise || "",
  };

  instructors.push(instructor);

  return success(res, instructor, 201, "Instructor created successfully");
};

exports.getAllInstructors = (req, res) => {
  return success(res, instructors, 200, "Instructors fetched successfully");
};

exports.deleteInstructor = (req, res) => {
  const { id } = req.params;

  const index = instructors.findIndex((i) => i.id === Number(id));

  if (index === -1) {
    return error(res, "Instructor not found", 404);
  }

  instructors.splice(index, 1);

  return success(res, null, 200, "Instructor deleted successfully");
};