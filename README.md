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
- Ensure proper authentication is implemented for protected endpoints.
