# Finwise Authentication API Documentation

## Base URL
```
http://localhost:3000/api/auth
```

## Endpoints

### 1. Register User
**POST** `/register`

Create a new user account with email and password.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success - 201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "googleId": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 2. Login User
**POST** `/login`

Login with email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "googleId": null
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

### 3. Google OAuth Login
**GET** `/google`

Redirect to Google OAuth login page.

**Usage:**
```
http://localhost:3000/api/auth/google
```

**Flow:**
1. User visits the above URL
2. Redirected to Google login
3. After successful login, redirected to callback URL
4. User data and token sent to frontend

### 4. Google OAuth Callback
**GET** `/google/callback`

Automatic callback from Google (don't call directly).

**Redirect URL (Success):**
```
http://localhost:5173/auth/success?token=JWT_TOKEN&user=USER_DATA
```

### 5. Get Current User
**GET** `/me`

Get current user information (requires authentication).

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response (Success - 200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "googleId": null
    }
  }
}
```

### 6. Logout
**POST** `/logout`

Logout user (client-side token removal).

**Response (Success - 200):**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Error Responses

**400 Bad Request:**
```json
{
  "success": false,
  "message": "All fields are required (firstName, lastName, email, password)"
}
```

**401 Unauthorized:**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

**500 Internal Server Error:**
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error details..."
}
```

## Authentication Flow

### Regular Login/Register:
1. User registers with email/password → Gets JWT token
2. User logs in with email/password → Gets JWT token
3. Include token in Authorization header for protected routes

### Google OAuth:
1. User clicks "Login with Google" → Redirect to `/api/auth/google`
2. User completes Google OAuth → Redirected to frontend with token
3. Frontend extracts token from URL and stores it
4. Use token for subsequent API calls

## Token Usage
Include the JWT token in the Authorization header:
```
Authorization: Bearer YOUR_JWT_TOKEN
```

## Database Updates
- User table now includes `googleId` field for Google OAuth users
- Passwords are automatically encrypted using bcrypt
- Google OAuth users have `password: null`
- Both regular and Google users can exist in the same system
