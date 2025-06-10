# Todo App

A simple Todo application built with React, Express, and MongoDB.

## Project Structure

- `/client` - React frontend (Node.js 14)
- `/server` - Express backend with MongoDB (Node.js 18)

## Prerequisites

- Node.js 14.x for the frontend
- Node.js 18.x for the backend
- MongoDB (local or Atlas)

## Installation

### Backend (Server)

```bash
cd server
npm install
```

### Frontend (Client)

```bash
cd client
npm install
```

## Running the Application

### Start MongoDB

Make sure MongoDB is running on your machine or you have a MongoDB Atlas connection string.

### Start the Backend Server

```bash
cd server
npm run dev
```

The server will start on http://localhost:5000

### Start the Frontend Development Server

```bash
cd client
npm start
```

The React app will start on http://localhost:3000

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Update a todo by ID
- `DELETE /api/todos/:id` - Delete a todo by ID 