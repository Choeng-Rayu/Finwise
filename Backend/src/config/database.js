import dotenv from "dotenv"; // use for loading environment variables from .env file
import { Sequelize } from "sequelize"; // use for importing the Sequelize class
import fs from "fs"; // use for reading SSL certificate file
import path from "path"; // use for handling file paths
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve .env path relative to this file (Backend/.env)
const envPath = path.resolve(__dirname, "../../.env");
const envExists = fs.existsSync(envPath);
const dotenvResult = dotenv.config({ path: envPath });

if (!envExists || dotenvResult.error) {
  console.warn(
    "Warning: .env not loaded from",
    envPath,
    "exists:",
    envExists,
    "error:",
    dotenvResult.error?.message
  );
}

// Fallback: if keys are still missing, parse manually and inject
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
  try {
    const parsed = dotenv.parse(fs.readFileSync(envPath));
    Object.entries(parsed).forEach(([key, val]) => {
      if (process.env[key] === undefined) process.env[key] = val;
    });
    console.log("Loaded .env via manual parse fallback.");
  } catch (e) {
    console.warn("Manual .env parse failed:", e?.message);
  }
}

// Validate required env vars early
const requiredKeys = [
  "DB_HOST",
  "DB_PORT",
  "DB_USER",
  "DB_PASSWORD",
  "DB_NAME",
  "DB_DIALECT",
];
const missing = requiredKeys.filter(
  (k) => !process.env[k] || String(process.env[k]).trim() === ""
);
if (missing.length) {
  throw new Error(
    `Missing required database environment variables: ${missing.join(
      ", "
    )}. Create and fill ${envPath}`
  );
}

// Read the SSL certificate file (located at Backend/ca.pem)
const caPath = path.resolve(__dirname, "../../ca.pem");
const sslCert = fs.readFileSync(caPath);

// Debug: print the DB connection target (no secrets)
// You can comment this out later
console.log("DB config:", {
  envPath,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  name: process.env.DB_NAME,
  user: process.env.DB_USER ? "[set]" : "[missing]",
});

const sequelize = new Sequelize(
  process.env.DB_NAME, // use for getting database name from .env
  process.env.DB_USER, // use for getting database user from .env
  process.env.DB_PASSWORD, // use for getting database password from .env
  {
    host: process.env.DB_HOST, // use for getting database host from .env
    port: Number(process.env.DB_PORT) || 23075, // use for getting database port from .env
    dialect: process.env.DB_DIALECT || "mysql", // use for specifying the database dialect from .env
    dialectOptions: {
      ssl: {
        ca: sslCert, // use SSL certificate for secure connection
        rejectUnauthorized: true, // verify the SSL certificate
      },
    },
    logging: console.log, // enable logging for debugging
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;