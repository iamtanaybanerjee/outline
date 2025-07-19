# API Documentation

This document provides an overview of the available APIs for user authentication, task management, and movie-related operations.

## API Table

| Method | Endpoint                          | Description                              | Body Parameters                          |
|--------|-----------------------------------|------------------------------------------|------------------------------------------|
| POST   | `/auth/register`                  | Creates a new user account.              | <pre>{<br>    "username": "tanay123",<br>    "password": "tanay@123"<br>}</pre> |
| POST   | `/auth/login`                     | Authenticates a user and returns a session token. | <pre>{<br>    "username": "tanay123",<br>    "password": "tanay@123"<br>}</pre> |
| POST   | `/user/task?userId=1`             | Creates a new task for the specified user. | <pre>{<br>    "title": "smaple4",<br>    "description": "asbc",<br>    "status": "pending"<br>}</pre> |
| POST   | `/user/task/:id`                  | Updates the details of an existing task. | <pre>{<br>    "title": "smaple1",<br>    "description": "asbc",<br>    "status": "pending"<br>}</pre> |
| GET    | `/user/tasks`                     | Retrieves a list of all tasks for the authenticated user. | None |
| DELETE | `/user/task/:id`                  | Deletes a specific task by its ID.       | None |

## Notes
- env file

DB_HOST = aws-0-ap-south-1.pooler.supabase.com
DB_USER = postgres.ahatjdnnexxsahtctjqy
DB_PASSWORD= IwANfMa8I38ZVbGW
DB_PORT=5432
DB_NAME= postgres
PORT = 3000
JWT_SECRET = 16c30d3b2751c1c9b66b8a711b11dde9e8e2e960ce12ff9139c9e8e5e3b54d6a
