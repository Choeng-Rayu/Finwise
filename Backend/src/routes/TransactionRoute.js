import express from "express";
import {
  addTransaction,
  getTransactionsHistory,
} from "../controller/TransactionController.js";
import { authenticateToken } from "../middleWare/auth.js";

const TransactionRouter = express.Router();

// Add a new transaction (requires authentication)
TransactionRouter.post("/transactions", authenticateToken, addTransaction);
TransactionRouter.get(
  "/transactionsHistory",
  authenticateToken,
  getTransactionsHistory
);

export default TransactionRouter;
