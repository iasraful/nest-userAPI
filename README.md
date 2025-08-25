# Users API (NestJS)

This module provides CRUD operations for managing users with roles (`Admin` or `User`).

## Base URL

---

## Endpoints

### 1. Get All Users

**Endpoint:**

**Description:**  
Fetch all users. You can optionally filter by role.

**Query Params (optional):**

- `role`: `"Admin"` or `"User"`

**Examples:**

- `GET /users` → returns all users
- `GET /users?role=Admin` → returns only admin users
- `GET /users?role=User` → returns only normal users

---

### 2. Get User by ID

**Endpoint:**

**Description:**  
Fetch a single user by their ID.

**Path Params:**

- `id`: number (User ID)

**Example:**  
`GET /users/2`

---

### 3. Create a User

**Endpoint:**

**Description:**  
Create a new user.

**Request Body:**

```json
{
  "name": "Tomas Doe",
  "email": "tom@example.com",
  "role": "User"
}
```

### 4. Update a User

Endpoint:

PATCH /users/:id

```json
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "role": "Admin"
}
```

### 5. Delete a User

Endpoint:

DELETE /users/:id

Description:
Delete a user by their ID.

Path Params:

id: number (User ID)

Example:
DELETE `/users/4`
