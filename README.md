# HireMe – Job Posting Platform (Backend)

HireMe is a role-based job posting and application platform built with Node.js, Express, and MongoDB. The system supports Admins, Employees (Recruiters), and Job Seekers, enforcing strict access control using JWT authentication. Job seekers can browse jobs and apply by uploading their CVs, while recruiters manage job postings and applications.

🚀 Features Overview
🔐 Authentication & Authorization

JWT-based authentication

Role-based access control (RBAC)

Secure protected routes using middleware

👥 Roles & Permissions
Admin

Manage all users (create, update, delete)

View all jobs and applications

Filter users, jobs, and applications

Employee (Recruiter)

Post, update, and delete jobs for their own company only

View applicants for their jobs

Accept or reject applications

Job Seeker

View available job listings

Apply for jobs (CV upload required)

Cannot apply to the same job more than once

View personal application history

📁 File Upload (CV / Resume)

Implemented using Multer (Disk Storage)

Supported formats:

PDF (.pdf)

DOCX (.docx)

Maximum file size: 5MB

File type and size validation enforced

Uploaded files are stored on the server filesystem (not in the database)

🧾 Application Handling

Each job application stores:

Job reference

Applicant reference

CV file path

Application status (pending, accepted, rejected)

Recruiters can update application status

Admins can view all applications

🛠 Tech Stack

Runtime: Node.js

Framework: Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT (JSON Web Tokens)

File Upload: Multer

Validation: Joi

Environment Management: dotenv

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ACCESS_TOKEN_EXPIRES_IN = time_limit_for_access_token 
REFRESH_TOKEN_EXPIRES_IN = time_limit_for_refresh_token

▶️ Getting Started <br>
1️⃣ Clone the Repository
git clone https://github.com/your-username/hireme-backend.git
cd hireme-backend
2️⃣ Install Dependencies
npm install
3️⃣ Configure Environment Variables

Create a .env file and add the required values (see above).

4️⃣ Run the Server
npm run dev
or
npm start

Server will run on: http://localhost:5000

📡 API Documentation

Complete API documentation is available via Postman

Includes:

Authentication flows

Role-protected routes

Job management

Application management

📁 Postman collection is included in the repository

🔒 Security Considerations

Passwords are securely hashed

JWT tokens required for all protected routes

Role validation middleware prevents unauthorized access

File upload restrictions prevent invalid or oversized files

📌 Future Improvements

Email notifications (application status updates)

Admin analytics dashboard

Rate limiting and request logging

Improved file storage

📜 License

This project is open-source and available for educational and learning purposes.
