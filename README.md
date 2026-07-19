# TODO App — Junior Full-Stack Test Task

## Live Demo

- **App:** https://list-note.vercel.app
- **Backend API:** https://list-2gf9.onrender.com
- **GitHub:** https://github.com/Poly1999/LIST

## Features

- Add, edit, delete tasks
- Mark tasks as done
- Search by title
- Filter by status (all / in progress / completed) and category
- Sort by priority (ascending / descending)
- Pagination (5 tasks per page)
- Priority (1–10), category, due date

## Tech Stack

- **Backend:** Node.js, Express, MongoDB (Mongoose)
- **Frontend:** Next.js, React, Tailwind CSS, shadcn/ui
- **Tests:** Jest + Supertest (backend API), Playwright (e2e)
- **Deployment:** Render (backend), Vercel (frontend)

## Project Structure

- `/backend` — Express API
- `/frontend` — Next.js app
- `/e2e` — Playwright end-to-end tests

## Local Setup

### Backend

```bash
cd backend
npm install
# create .env based on .env.example
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Tests

```bash
# Backend tests
cd backend
npm test

# E2E tests (requires backend + frontend running)
cd e2e
npx playwright test
```

## AI Workflow

I used Claude (Anthropic) as a coding assistant while building this project:

- Planned the architecture, database schema, and API design together with Claude before starting, since this was my first time building with this exact stack (Next.js, MongoDB in this combination)
- While writing the backend and frontend, I checked in with Claude on parts I was doing for the first time — for example, understanding Next.js App Router structure, Tailwind CSS syntax, and how to structure Playwright e2e tests
- Used it to understand and fix errors I ran into during development
- Made all UI/UX design decisions myself based on my own references, tested every feature manually, and handled the git workflow (branching, commits, merges) myself
