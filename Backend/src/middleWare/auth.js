import passport from "../config/passport.js";

// JWT Authentication Middleware
export const authenticateToken = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Authentication error",
        error: err.message
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Invalid or expired token."
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};

// Optional authentication middleware (doesn't fail if no token)
export const optionalAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next();
  }

  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (!err && user) {
      req.user = user;
    }
    next();
  })(req, res, next);
};
