
# Job Application Management System

A RESTful Job Application Management System built with Node.js, Express, and MongoDB, providing CRUD operations for managing job positions, applicants, and interviews. The system includes JWT authentication to secure endpoints.

## Features

- **Job Positions**: Create, view, and manage job positions.
- **Applicants**: Add applicants for specific job positions, update their status, and delete records.
- **Interviews**: Schedule and retrieve interview details for applicants.
- **Authentication**: Protect routes using JWT-based authentication.
- **Validation**: Input validation for job positions, applicants, and interview scheduling.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Validation**: Mongoose

## API Endpoints

### Job Position Endpoints

- `POST /addjobs`: Add a new job position.
- `GET /getjobs`: Retrieve a list of all job positions.

### Applicant Endpoints

- `POST /add_applicant`: Add a new applicant for a specific job.
- `GET /get_applicant?jobId={jobId}`: Retrieve all applicants for a specific job.
- `PATCH /edit_applicant/{applicantId}`: Update an applicant's status (Pending, Interviewed, Rejected, Hired).
- `DELETE /delete_applicant/{applicantId}`: Delete an applicant.

### Interview Endpoints

- `GET /getInt?applicantId={applicantId}`: Fetch interview details for a specific applicant.
- `POST /scheduleInt`: Schedule an interview (Applicant ID, Interview Date, Interviewer Name).

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gitusergb/Job-app-management-system.
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```plaintext
   MONGO_URI=mongodb+srv://your_user:your_password@----
   JWT_SECRET=******
   ```

4. Run the application:

   ```bash
   npm start
   ```

### Authentication

To access the protected endpoints, you must include a valid JWT token in the `Authorization` header.

## Contributors

- **Gauri Bidwai** - [GitHub](https://github.com/gitusergb)
