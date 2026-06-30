# LMS Backend API - Phase 1

This is a modular Learning Management System backend built using Node.js and Express.js.

## Features

- Students module
- Instructors module
- Courses module
- Enrollments module
- Lessons module
- Modular folder structure
- REST API design
- Reusable response helper
- In-memory data storage

## Tech Stack

- Node.js
- Express.js
- JavaScript
- Postman

## Project Structure

```text
PROJECT_3/
│
├── modules/
│   ├── students/
│   │   ├── student.routes.js
│   │   └── student.controller.js
│   │
│   ├── instructors/
│   │   ├── instructor.routes.js
│   │   └── instructor.controller.js
│   │
│   ├── courses/
│   │   ├── course.routes.js
│   │   └── course.controller.js
│   │
│   ├── enrollments/
│   │   ├── enrollment.routes.js
│   │   └── enrollment.controller.js
│   │
│   └── lessons/
│       ├── lesson.routes.js
│       └── lesson.controller.js
│
├── utils/
│   └── apiResponse.js
│
├── app.js
├── server.js
├── package.json
└── README.md
```

## API Endpoints

### Home

```http
GET /
```

### Students

```http
POST /api/v1/students
GET /api/v1/students
```

### Instructors

```http
POST /api/v1/instructors
GET /api/v1/instructors
```

### Courses

```http
POST /api/v1/courses
GET /api/v1/courses
```

### Enrollments

```http
POST /api/v1/enrollments
GET /api/v1/enrollments
```

### Lessons

```http
POST /api/v1/lessons
GET /api/v1/lessons
GET /api/v1/courses/:id/lessons
```

## Sample Requests

### Create Student

```json
{
  "name": "Asha",
  "email": "asha@lms.com"
}
```

### Create Instructor

```json
{
  "name": "Dr Rao",
  "subject": "Backend"
}
```

### Create Course

```json
{
  "title": "Node 101",
  "code": "ND101",
  "instructorId": 1
}
```

### Create Enrollment

```json
{
  "studentId": 1,
  "courseId": 1
}
```

### Create Lesson

```json
{
  "title": "Introduction to Node.js",
  "courseId": 1
}
```

## Response Format

### Success Response

```json
{
  "success": true,
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "error": "message"
}
```

## How to Run

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

Server will run on:

```text
http://localhost:3000
```

## Status

Project completed successfully.