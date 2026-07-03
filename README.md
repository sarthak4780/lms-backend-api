# LMS Backend API - Phase 3 Auth

This is a Node.js and Express.js based LMS Backend API with authentication and role-based authorization.

## Features

- User registration
- User login
- Password hashing using bcrypt
- JWT authentication
- Protected routes
- Role-based access control
- Student, Instructor, and Admin roles
- Profile fetch and update
- Course management with permissions
- Instructor management
- Enrollment management

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt
- JSON Web Token
- dotenv
- CORS

## Roles

### Student
- Can login
- Can view profile
- Can view protected student APIs
- Cannot create courses
- Cannot create enrollments

### Instructor
- Can create courses
- Can create enrollments
- Can access protected APIs

### Admin
- Can delete courses
- Can create and delete instructors
- Can delete enrollments
- Has highest level access

## API Endpoints

### Auth Routes

```http
POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/auth/profile
PUT /api/v1/auth/profile