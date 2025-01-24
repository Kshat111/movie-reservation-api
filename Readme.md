
# Movie Reservation System Backend

A backend service for a Movie Reservation System built using the **NodeJS**. This service allows users to sign up, log in, browse movies, reserve seats for specific showtimes, and manage their reservations. Admins can manage movies and showtimes, and view reservation reports.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
  - [Movie Management](#movie-management)
  - [Reservation Management](#reservation-management)
  - [Admin Routes](#admin-routes)
- [Environment Variables](#environment-variables)

---

## Features

- **User Authentication:**
  - Sign up and log in with JWT token-based authentication.
  - Roles for users (`user`, `admin`).
  - Admin can promote other users to admin.

- **Movie Management (Admin only):**
  - Admins can add, update, and delete movies.
  - Movies categorized by genre.
  - Admin can add showtimes for movies.

- **Seat Reservation:**
  - Users can reserve seats for a specific showtime.
  - See available seats for showtimes.
  - View, manage, and cancel upcoming reservations.

- **Reporting (Admin only):**
  - Admin can view all reservations, total capacity, and revenue.

---

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)
- **Others:** bcryptjs for password hashing, dotenv for environment variable management

---

## Setup Instructions

### Prerequisites

Ensure that you have the following installed on your machine:

- Node.js
- MongoDB (or MongoDB Atlas account for cloud database)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-reservation-backend.git
cd movie-reservation-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project with the following variables:

```plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/moviesDB
JWT_SECRET=your_jwt_secret
PORT=5000
```

Replace `<username>`, `<password>`, and `moviesDB` with your MongoDB credentials and database name.

### 4. Run the Server

```bash
npm start
```

This will start the server on `http://localhost:5000`.

---

## API Endpoints

### Authentication

#### **POST /api/auth/signup**
- Registers a new user.
- **Request body:**
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

#### **POST /api/auth/login**
- Logs in a user and returns a JWT token.
- **Request body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

---

### Movie Management (Admin only)

#### **POST /api/movies**
- Adds a new movie.
- **Request body:**
  ```json
  {
    "title": "Movie Title",
    "description": "Description of the movie",
    "genre": "Action",
    "poster": "URL_to_image"
  }
  ```

#### **PUT /api/movies/:id**
- Updates an existing movie by ID.
- **Request body:** (Same as `POST /api/movies`)

#### **DELETE /api/movies/:id**
- Deletes a movie by ID.

---

### Reservation Management

#### **GET /api/reservations**
- Retrieves all reservations for the logged-in user.

#### **POST /api/reservations**
- Create a reservation by selecting seats for a showtime.
- **Request body:**
  ```json
  {
    "showtimeId": "showtime_id_here",
    "seats": [1, 2, 3]
  }
  ```

#### **DELETE /api/reservations/:id**
- Cancels a reservation by ID (only upcoming reservations can be canceled).

---

### Admin Routes

#### **GET /api/admin/reservations**
- Retrieves all reservations for all users.
- **Response:**
  ```json
  [
    {
      "user": "user_id_here",
      "showtime": "showtime_id_here",
      "seats": [1, 2],
      "totalCost": 30
    },
    ...
  ]
  ```

---

## Environment Variables

- **MONGO_URI:** MongoDB connection URI for the database.
- **JWT_SECRET:** Secret key for signing JWT tokens.
- **PORT:** The port on which the server runs (default is 5000).



