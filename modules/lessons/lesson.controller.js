const { success, error } = require("../../utils/apiResponse");

let lessons = [];
let nextId = 1;

exports.createLesson = (req, res) => {
  const { title, courseId } = req.body;

  if (!title || !courseId) {
    return error(res, "title & courseId required", 400);
  }

  const lesson = {
    id: nextId++,
    title,
    courseId
  };

  lessons.push(lesson);

  success(res, lesson, 201);
};

exports.getAllLessons = (req, res) => {
  success(res, lessons);
};

exports.getLessonsByCourse = (req, res) => {
  const courseId = Number(req.params.id);

  const courseLessons = lessons.filter((lesson) => lesson.courseId === courseId);

  success(res, courseLessons);
};