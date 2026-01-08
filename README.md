# HireMe – Job Posting Platform (Backend)

HireMe is a role-based job posting and application platform built with Node.js, Express, and MongoDB. The system supports Admins, Employees (Recruiters), and Job Seekers, enforcing strict access control using JWT authentication. Job seekers can browse jobs and apply by uploading their CVs, while recruiters manage job postings and applications.

🚀 Features Overview
## 🔐 Authentication & Authorization

JWT-based authentication

Role-based access control (RBAC)

Secure protected routes using middleware

## 👥 Roles & Permissions

| Role                 | Permissions                                 |
|----------------------|---------------------------------------------|
| **Admin**             | - Manage all users (create, update, delete)<br>- View all jobs and applications<br>- Filter users, jobs, and applications |
| **Employee (Recruiter)** | - Post, update, and delete jobs<br>- View applicants for their jobs<br>- Accept or reject applications |
| **Job Seeker**        | - View available job listings<br>- Apply for jobs (CV upload required)<br>- Cannot apply to the same job more than once<br>- View personal application history |


## 📁 File Upload (CV / Resume)


Job seekers must upload a CV/resume when applying for a job.

| Item               | Details |
|--------------------|---------|
| Upload Library     | Multer (Disk Storage) |
| Allowed Formats    | PDF (`.pdf`), DOCX (`.docx`) |
| Maximum File Size  | 5 MB |
| Validation         | File type and size validation enforced |
| Storage Method     | Server filesystem (files are not stored in the database) |

## 🧾 Application Handling

Each job application stores:

Job reference

Applicant reference

CV file path

Application status (pending, accepted, rejected)

Recruiters can update application status

Admins can view all applications

## 🛠 Tech Stack

Runtime: Node.js

Framework: Express.js

Database: MongoDB (Mongoose ODM)

Authentication: JWT (JSON Web Tokens)

File Upload: Multer

Validation: Joi

Environment Management: dotenv

## 🛡️ Env Configuration

Create a .env file in the root directory:

PORT=5000 <br>
MONGO_URI=your_mongodb_connection_string <br>
JWT_SECRET=your_jwt_secret <br>
ACCESS_TOKEN_EXPIRES_IN = time_limit_for_access_token <br> 
REFRESH_TOKEN_EXPIRES_IN = time_limit_for_refresh_token <br>

## ▶️ Getting Started <br><br>
1️⃣ Clone the Repository <br>
`git clone https://github.com/your-username/hireme-backend.git` <br>
cd hireme-backend <br>
2️⃣ Install Dependencies <br>
npm install <br>
3️⃣ Configure Environment Variables <br>

Create a .env file and add the required values (see above).

4️⃣ Run the Server
npm run dev
or
npm start

Server will run on: http://localhost:5000

## 📡 API Documentation

Complete API documentation is available via Postman

Includes:

Authentication flows

Role-protected routes

Job management

Application management

📁 Postman collection is included in the repository

## 🔒 Security Considerations

Passwords are securely hashed

JWT tokens required for all protected routes

Role validation middleware prevents unauthorized access

File upload restrictions prevent invalid or oversized files

## 📌 Future Improvements

Email notifications (application status updates)

Admin analytics dashboard

Rate limiting and request logging

Improved file storage

## 📜 License

This project is open-source and available for educational and learning purposes.
