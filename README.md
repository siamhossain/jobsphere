# JobSphere – Full Stack Job Board Platform

JobSphere is a modern full-stack job board application where admins can post jobs and users can browse available opportunities.
The project demonstrates a separate frontend and backend.

## Live Demo

Frontend:
https://jobsphere-dev.vercel.app

Backend API:
https://job-board-api-mh88.onrender.com/api/jobs

## Tech Stack

Frontend

- Next.js
- React
- Tailwind CSS
- TypeScript

Backend

- Node.js
- Express.js

Database

- MongoDB
- MongoDB Atlas

Deployment

- Frontend: Vercel
- Backend: Render

## Features

- Browse available jobs
- View detailed job descriptions
- Filter with category, locations and search jobs
- Apply for jobs
- Admin can create jobs
- Edit existing jobs
- Delete jobs
- Category-based job listing
- Functional Featured jobs
- Latest jobs
- Responsive UI
- REST API architecture
- Full-stack deployment

## Project Structure

JobSphere/
│
├── frontend/
│ ├── app/
│ ├── components/
│ ├── lib/
│ ├── types/
│ └── public/
│
└── backend/
├── controllers/
├── models/
├── routes/
├── config/
└── server.js

## Installation

1. Clone the repository

git clone https://github.com/siamhossain/jobsphere.git

2. Install frontend

cd jobsphere/frontend
npm install

Run frontend

npm run dev

3. Install backend

cd ../backend
npm install

Run backend

npm run dev

## Environment Variables

Backend (.env)

MONGO_URI=your_mongodb_connection_string
PORT=5000

Frontend (.env.local)

NEXT_PUBLIC_API_URL=http://localhost:5000/api

For production

NEXT_PUBLIC_API_URL=https://job-board-api-mh88.onrender.com/api

## API Endpoints

Get all jobs
GET /api/jobs

Get single job
GET /api/jobs/:id

Create job
POST /api/jobs

Update job
PUT /api/jobs/:id

Delete job
DELETE /api/jobs/:id

## Future Improvements

- Authentication system
- Resume upload
- Saved jobs
- Multiple Category Selector
- Functional Job type
- Company profiles
- Advanced filtering
- Popular search
- Pagination

## Author

Shiam Hossain
Software Engineer

GitHub:
https://github.com/siamhossain
