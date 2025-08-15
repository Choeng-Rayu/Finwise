import jwt from "jsonwebtoken";
import User from "../model/users.js";

// JWT Secret (should be in environment variables in production)
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-finwise-2025";

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: "7d" });
};

// Register new user
export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required (firstName, lastName, email, password)"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User with this email already exists"
      });
    }

    // Create new user (password will be automatically hashed by the model hooks)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password
    });

    // Generate token
    const token = generateToken(user.id);

    // Return user data (without password)
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      googleId: user.googleId
    };

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: userData,
        token
      }
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required"
      });
    }

    // Find user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Check if user has a password (not Google OAuth user)
    if (!user.password) {
      return res.status(401).json({
        success: false,
        message: "This account was created with Google. Please login with Google."
      });
    }

    // Validate password
    const isValidPassword = await user.validatePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

    // Generate token
    const token = generateToken(user.id);

    // Return user data (without password)
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      googleId: user.googleId
    };

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: userData,
        token
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};

// Google OAuth success callback
export const googleCallback = async (req, res) => {
  try {
    const user = req.user; // Set by passport strategy

    // Generate token
    const token = generateToken(user.id);

    // Return user data
    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      googleId: user.googleId
    };

    // Redirect to frontend with token
    res.redirect(`http://localhost:5173/auth/success?token=${token}&user=${encodeURIComponent(JSON.stringify(userData))}`);

  } catch (error) {
    console.error("Google callback error:", error);
    res.redirect(`http://localhost:5173/auth/error?message=${encodeURIComponent("Authentication failed")}`);
  }
};

// Get current user (protected route)
export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user; // Set by JWT middleware

    const userData = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      googleId: user.googleId
    };

    res.status(200).json({
      success: true,
      data: { user: userData }
    });

  } catch (error) {
    console.error("Get current user error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};
