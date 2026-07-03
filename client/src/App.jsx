import { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:3000/api/v1";

function App() {
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [studentForm, setStudentForm] = useState({
    name: "",
    email: "",
  });

  const [instructorForm, setInstructorForm] = useState({
    name: "",
    subject: "",
  });

  const [courseForm, setCourseForm] = useState({
    title: "",
    code: "",
    instructorId: "",
  });

  const [enrollmentForm, setEnrollmentForm] = useState({
    studentId: "",
    courseId: "",
  });

  const [lessonForm, setLessonForm] = useState({
    title: "",
    courseId: "",
  });

  const fetchData = async () => {
    try {
      const studentRes = await fetch(`${API}/students`);
      const instructorRes = await fetch(`${API}/instructors`);
      const courseRes = await fetch(`${API}/courses`);
      const enrollmentRes = await fetch(`${API}/enrollments`);
      const lessonRes = await fetch(`${API}/lessons`);

      const studentData = await studentRes.json();
      const instructorData = await instructorRes.json();
      const courseData = await courseRes.json();
      const enrollmentData = await enrollmentRes.json();
      const lessonData = await lessonRes.json();

      setStudents(studentData.data || []);
      setInstructors(instructorData.data || []);
      setCourses(courseData.data || []);
      setEnrollments(enrollmentData.data || []);
      setLessons(lessonData.data || []);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createStudent = async (e) => {
    e.preventDefault();

    await fetch(`${API}/students`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentForm),
    });

    setStudentForm({ name: "", email: "" });
    fetchData();
  };

  const createInstructor = async (e) => {
    e.preventDefault();

    await fetch(`${API}/instructors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instructorForm),
    });

    setInstructorForm({ name: "", subject: "" });
    fetchData();
  };

  const createCourse = async (e) => {
    e.preventDefault();

    await fetch(`${API}/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: courseForm.title,
        code: courseForm.code,
        instructorId: Number(courseForm.instructorId),
      }),
    });

    setCourseForm({ title: "", code: "", instructorId: "" });
    fetchData();
  };

  const createEnrollment = async (e) => {
    e.preventDefault();

    await fetch(`${API}/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId: Number(enrollmentForm.studentId),
        courseId: Number(enrollmentForm.courseId),
      }),
    });

    setEnrollmentForm({ studentId: "", courseId: "" });
    fetchData();
  };

  const createLesson = async (e) => {
    e.preventDefault();

    await fetch(`${API}/lessons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: lessonForm.title,
        courseId: Number(lessonForm.courseId),
      }),
    });

    setLessonForm({ title: "", courseId: "" });
    fetchData();
  };

  return (
    <div className="app">
      <header className="header">
        <h1>LMS Backend Dashboard</h1>
        <p>React frontend connected with Node.js + Express backend</p>
      </header>

      <section className="grid">
        <div className="card">
          <h2>Add Student</h2>
          <form onSubmit={createStudent}>
            <input
              type="text"
              placeholder="Student Name"
              value={studentForm.name}
              onChange={(e) =>
                setStudentForm({ ...studentForm, name: e.target.value })
              }
              required
            />
            <input
              type="email"
              placeholder="Student Email"
              value={studentForm.email}
              onChange={(e) =>
                setStudentForm({ ...studentForm, email: e.target.value })
              }
              required
            />
            <button type="submit">Add Student</button>
          </form>
        </div>

        <div className="card">
          <h2>Add Instructor</h2>
          <form onSubmit={createInstructor}>
            <input
              type="text"
              placeholder="Instructor Name"
              value={instructorForm.name}
              onChange={(e) =>
                setInstructorForm({ ...instructorForm, name: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={instructorForm.subject}
              onChange={(e) =>
                setInstructorForm({
                  ...instructorForm,
                  subject: e.target.value,
                })
              }
              required
            />
            <button type="submit">Add Instructor</button>
          </form>
        </div>

        <div className="card">
          <h2>Add Course</h2>
          <form onSubmit={createCourse}>
            <input
              type="text"
              placeholder="Course Title"
              value={courseForm.title}
              onChange={(e) =>
                setCourseForm({ ...courseForm, title: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Course Code"
              value={courseForm.code}
              onChange={(e) =>
                setCourseForm({ ...courseForm, code: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Instructor ID"
              value={courseForm.instructorId}
              onChange={(e) =>
                setCourseForm({
                  ...courseForm,
                  instructorId: e.target.value,
                })
              }
              required
            />
            <button type="submit">Add Course</button>
          </form>
        </div>

        <div className="card">
          <h2>Add Enrollment</h2>
          <form onSubmit={createEnrollment}>
            <input
              type="number"
              placeholder="Student ID"
              value={enrollmentForm.studentId}
              onChange={(e) =>
                setEnrollmentForm({
                  ...enrollmentForm,
                  studentId: e.target.value,
                })
              }
              required
            />
            <input
              type="number"
              placeholder="Course ID"
              value={enrollmentForm.courseId}
              onChange={(e) =>
                setEnrollmentForm({
                  ...enrollmentForm,
                  courseId: e.target.value,
                })
              }
              required
            />
            <button type="submit">Enroll Student</button>
          </form>
        </div>

        <div className="card">
          <h2>Add Lesson</h2>
          <form onSubmit={createLesson}>
            <input
              type="text"
              placeholder="Lesson Title"
              value={lessonForm.title}
              onChange={(e) =>
                setLessonForm({ ...lessonForm, title: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Course ID"
              value={lessonForm.courseId}
              onChange={(e) =>
                setLessonForm({ ...lessonForm, courseId: e.target.value })
              }
              required
            />
            <button type="submit">Add Lesson</button>
          </form>
        </div>
      </section>

      <section className="data-section">
        <DataBox title="Students" data={students} />
        <DataBox title="Instructors" data={instructors} />
        <DataBox title="Courses" data={courses} />
        <DataBox title="Enrollments" data={enrollments} />
        <DataBox title="Lessons" data={lessons} />
      </section>
    </div>
  );
}

function DataBox({ title, data }) {
  return (
    <div className="data-box">
      <h2>{title}</h2>

      {data.length === 0 ? (
        <p className="empty">No data available</p>
      ) : (
        data.map((item) => (
          <div className="item" key={item.id}>
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

export default App;