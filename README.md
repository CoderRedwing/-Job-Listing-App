# 🧑‍💼 Job Listing App

A full-stack job listing application that allows users to browse, filter, and view detailed job postings. Built with a modern tech stack featuring a Vite + React frontend and an Express + MongoDB backend.

---

## 🚀 Features

- Job listing cards with real-time filtering and pagination.
- View detailed job descriptions, requirements, and application links.
- Filter jobs by:
  - Location
  - Source (LinkedIn, Indeed, etc.)
  - Experience Range (min & max)
- Quick apply links and company logos.
- "Time ago" posted label (e.g., "3 days ago").
- Responsive design for desktop and mobile.

---

## 🔍 API Filters

Use the following query parameters in the backend API to filter job results:

```

GET /jobs?page=1\&limit=150\&min\_exp=0\&max\_exp=2\&location=Delhi\&source=Linkedin

```

### Available Filters:

- `page`: Page number (pagination)
- `limit`: Number of jobs per page
- `min_exp`: Minimum experience (years)
- `max_exp`: Maximum experience (years)
- `location`: City or location name
- `source`: Job source (e.g., LinkedIn, Internshala, etc.)

---

## 💻 Technologies Used

### Frontend:

- React (with Vite)
- TailwindCSS

### Backend:

- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 🌐 Live URLs

> Replace these links once deployed

- **Frontend URL**: [https://job-listing-app-wheat.vercel.app/](https://job-listing-app-wheat.vercel.app/)
- **Backend API**: [https://job-listing-app-4evp.onrender.com/jobs?&page=1](https://job-listing-app-4evp.onrender.com/jobs?&page=1)

---

## 📦 Setup Instructions

### Backend:

```bash
cd backend
npm install
npm run dev
```

### Frontend:

```bash
cd frontend
npm install
npm run dev
```

Make sure MongoDB is running and the backend `.env` is configured with the correct connection string and port.

---
