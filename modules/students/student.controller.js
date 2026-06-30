const { success } = require("../../utils/apiResponse");

let students = [];
let nextId = 1;

exports.createStudent = (req, res) => {
  const student = {
    id: nextId++,
    ...req.body
  };

  students.push(student);

  success(res, student, 201);
};

exports.getAllStudents = (req, res) => {
  success(res, students);
};