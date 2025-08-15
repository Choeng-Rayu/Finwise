#!/bin/bash

echo "Testing Finwise Authentication API"
echo "=================================="

# Test server is running
echo "1. Testing server status..."
response=$(curl -s http://localhost:3000)
echo "Response: $response"
echo ""

# Test registration
echo "2. Testing user registration..."
registration_response=$(curl -s -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "TestUser",
    "lastName": "Demo",
    "email": "testuser@example.com",
    "password": "password123"
  }')
echo "Registration Response: $registration_response"
echo ""

# Test login
echo "3. Testing user login..."
login_response=$(curl -s -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "testuser@example.com",
    "password": "password123"
  }')
echo "Login Response: $login_response"
echo ""

# Test Google OAuth endpoint
echo "4. Testing Google OAuth endpoint..."
google_response=$(curl -s -w "%{http_code}" http://localhost:3000/api/auth/google)
echo "Google OAuth HTTP Status: $google_response"
echo ""

echo "Test completed!"
