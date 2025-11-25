PeakDynamics
A full-stack football web application for checking scores, tables, fixtures, and news, built with React (frontend), Spring Boot (backend), and MySQL (database).

🚀 Features

Live football scores and tables

Latest news and match fixtures

Full-stack architecture (React + Spring Boot + MySQL)

Easy local setup

Ready for deployment

🗂 Project Structure
PeakDynamics/
├─ frontend/           ← React frontend
│   ├─ src/
│   ├─ public/
│   └─ package.json
├─ backend/            ← Spring Boot backend
│   ├─ src/
│   ├─ pom.xml
│   └─ database.sql    ← SQL schema and sample data
└─ README.md


🛠 Prerequisites
Node.js (v14+)
Java JDK (v11+)
Maven (for backend)
MySQL
Git

▶️ Running Locally
1. Setup Backend (Spring Boot)

Open backend/database.sql and import it into MySQL:

CREATE DATABASE peakdynamics;
USE peakdynamics;
-- tables from database.sql

Update application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/peakdynamics
spring.datasource.username=YOUR_DB_USERNAME
spring.datasource.password=YOUR_DB_PASSWORD
spring.jpa.hibernate.ddl-auto=update

Start the backend:

cd backend
mvn spring-boot:run

Backend runs on http://localhost:8080

2. Setup Frontend (React)

Create .env file in frontend/ (copy from .env.example if you want):

REACT_APP_API_URL=http://localhost:8080

Install dependencies:

cd frontend
npm install

Run the frontend:

npm start

Frontend runs on http://localhost:3000

🧪 API Endpoints

Replace localhost:8080 with your backend URL if different.

EndpointMethodDescription/api/matchesGETFetch all match scores and fixtures/api/teamsGETFetch all teams and standings/api/newsGETFetch latest football news
(Add more if your backend has additional endpoints)

💾 Database
SQL file: backend/database.sql
Contains all tables required for the backend

Import into MySQL before running the backend

📄 Environment Variables
Backend: application.properties → DB credentials
Frontend: .env → API URL

🤝 Contributing

Fork this repository

Create a new branch: git checkout -b feature/YourFeature

Make your changes

Commit: git commit -m "Add feature"

Push: git push origin feature/YourFeature

Open a Pull Request

📦 Deployment
You can dockerize both frontend and backend for deployment, or deploy separately:

Backend: Spring Boot jar

Frontend: React build folder

Database: import SQL or connect to cloud MySQL

📄 License
