import express from "express";
import { addTransaction } from "../controller/TransactionController.js";
import { authenticateToken } from "../middleWare/auth.js";

const TransactionRouter = express.Router();

// Add a new transaction (requires authentication)
TransactionRouter.post("/transactions", authenticateToken, addTransaction);

export default TransactionRouter;
