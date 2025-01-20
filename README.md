# Authentication API

## Overview

This API provides secure authentication services using JWT (JSON Web Token). The API is built with **NestJS** and offers the following features:

- **User Registration:** Register a new user with email and password.
- **User Login:** Authenticate users and return a JWT token for authorized access.
- **Swagger Documentation:** Auto-generated API documentation for ease of use.
- **Unit and Integration Tests:** Comprehensive test coverage to ensure API reliability.

## Features

- **JWT Authentication:** Secure the endpoints with JWT-based authentication.
- **CRUD Operations:** Basic registration and login functionality.
- **Input Validation:** Ensure only valid data is processed using DTOs and Pipes.
- **Error Handling:** Graceful handling of errors with appropriate HTTP status codes.
- **Swagger API Documentation:** Auto-generated for easy exploration and testing.

## Prerequisites

- **Node.js** (version 14.x or later)
- **npm** (version 6.x or later)
- **MongoDB** (cloud instance or local setup)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Taskeenhaider321/authentications.git
cd product-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```bash
PORT=3000
MONGODB_URI=mongodb+srv://your-mongodb-connection
JWT_SECRET=YourJWTSecret
JWT_EXPIRES_IN=3d
```

### 4. Start the Server

```bash
npm run start:dev
```

The server will start on `http://localhost:3000`.

### 5. Access Swagger Documentation

Visit `http://localhost:3000/api` to access the Swagger API documentation.

### 6. Run Test Cases

```bash
npm run test:watch
```

---

## Routes and API Endpoints

### 1. **User Registration**

- **Method:** `POST`
- **Path:** `v1/auth/register`
- **Description:** Registers a new user with email and password.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```
- **Response:**
  - **Success (201):**
    ```json
    {
      "email": "user@example.com",
      "password": "$2b$10$i3Vywsv/804z6aaStJjMye9bxtfOanh4Gj/guMTFSeBlysDgZj63a",
      "_id": "678a3da903acf0ddbf4365c4",
      "__v": 0
    }
    ```
  - **Error (400):** Validation error details.

### 2. **User Login**

- **Method:** `POST`
- **Path:** `v1/auth/login`
- **Description:** Logs in a registered user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "userpassword"
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "token": "jwt-token"
    }
    ```
  - **Error (401):** Invalid email or password.

---

## Testing

### Unit Tests

Unit tests are written for each service and controller method to ensure they work as expected. To run unit tests, use:

```bash
npm run test
```

---

## External Libraries Used

- **NestJS:** A progressive Node.js framework for building efficient, scalable server-side applications.
- **Passport:** Middleware for authentication.
- **JWT (jsonwebtoken):** JSON Web Token implementation.
- **Swagger:** API documentation generator for RESTful APIs.
- **class-validator:** A library for validating data using TypeScript decorators.
- **Jest:** A testing framework for unit and integration testing.

---

## Best Practices Followed

- **Separation of Concerns:** Business logic is handled in services, and HTTP routing is managed by controllers.
- **DTOs and Validation:** DTOs are used to ensure only valid data is processed.
- **Error Handling:** Exception filters catch and handle errors gracefully.
- **Security:** JWT-based authentication ensures secure access to the API.
- **Documentation:** The API is documented using Swagger for easy exploration and testing.
- **Testing:** Unit, integration, and end-to-end tests ensure the reliability of the API.

---

## Scalability Considerations

- **Modular Design:** The application is organized into modules, making it easy to extend and scale.
- **Database Integration:** MongoDB is used as the database, ensuring scalability with large datasets.

---

## Security Considerations

- **Authentication and Authorization:** JWT-based authentication secures routes.
- **Input Validation:** Input data is validated to prevent common vulnerabilities like SQL Injection, XSS, etc.
