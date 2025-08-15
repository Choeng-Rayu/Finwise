#!/bin/bash

echo "🧪 Finwise Authentication API Testing"
echo "====================================="
echo ""

# Test server status
echo "📡 1. Testing server status..."
SERVER_STATUS=$(curl -s http://localhost:3000)
echo "Response: $SERVER_STATUS"
echo ""

# Test registration with a new user
echo "👤 2. Testing user registration..."
REGISTRATION_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User", 
    "email": "test.user.demo@example.com",
    "password": "password123"
  }')
echo "Registration Response: $REGISTRATION_RESPONSE"
echo ""

# Test registration with missing fields
echo "❌ 3. Testing registration with missing fields..."
BAD_REGISTRATION=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "email": "incomplete@example.com"
  }')
echo "Bad Registration Response: $BAD_REGISTRATION"
echo ""

# Test login with correct credentials
echo "🔐 4. Testing login with correct credentials..."
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test.user.demo@example.com",
    "password": "password123"
  }')
echo "Login Response: $LOGIN_RESPONSE"

# Extract token from login response
TOKEN=$(echo $LOGIN_RESPONSE | grep -o '"token":"[^"]*"' | cut -d'"' -f4)
echo "Extracted Token: ${TOKEN:0:50}..."
echo ""

# Test login with wrong password
echo "❌ 5. Testing login with wrong password..."
WRONG_LOGIN=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test.user.demo@example.com",
    "password": "wrongpassword"
  }')
echo "Wrong Login Response: $WRONG_LOGIN"
echo ""

# Test protected route with token
if [ ! -z "$TOKEN" ]; then
    echo "🔒 6. Testing protected route with JWT token..."
    PROTECTED_RESPONSE=$(curl -s -H "Authorization: Bearer $TOKEN" http://localhost:3000/api/auth/me)
    echo "Protected Route Response: $PROTECTED_RESPONSE"
    echo ""
fi

# Test protected route without token
echo "❌ 7. Testing protected route without token..."
NO_TOKEN_RESPONSE=$(curl -s http://localhost:3000/api/auth/me)
echo "No Token Response: $NO_TOKEN_RESPONSE"
echo ""

# Test duplicate registration
echo "❌ 8. Testing duplicate registration..."
DUPLICATE_RESPONSE=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Duplicate",
    "lastName": "User",
    "email": "test.user.demo@example.com",
    "password": "password456"
  }')
echo "Duplicate Registration Response: $DUPLICATE_RESPONSE"
echo ""

echo "✅ Testing completed!"
