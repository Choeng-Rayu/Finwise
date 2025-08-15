import express from "express";
import cors from "cors";
import session from "express-session";
import sequelize from "./src/config/database.js";
import setupAssociation from "./src/model/associatoin.js";
import passport from "./src/config/passport.js";
import authRoutes from "./src/routes/auth.js";

const app = express();
const port = 3000;

// CORS configuration
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:4000"],
  credentials: true
}));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || "finwise-session-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true in production with HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Finwise API is running!" });
});

async function start() {
  try {
    // Setup database associations
    setupAssociation();
    
    // Test database connection
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
    
    // Sync database (create tables if they don't exist)
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");
    
    // Start server
    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
      console.log(`📊 Google OAuth callback: http://localhost:${port}/api/auth/google/callback`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

start();
