import express, { json } from "express";
import cors from "cors";
import sequelize from "./src/config/database.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(json());
async function start() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

start();
