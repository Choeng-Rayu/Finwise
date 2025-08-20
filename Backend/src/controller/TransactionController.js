import {
  CreateTransaction,
  TransactionsHistory,
} from "../Repository/TransactionSequelize.js";
export const addTransaction = async (req, res) => {
  try {
    const { name, amount, date, budgetId, categoryId, currencyId, reportId } =
      req.body;

    // Get userId from Passport
    const userId = req.user.id;

    const transaction = await CreateTransaction({
      name,
      amount,
      date,
      budgetId,
      categoryId,
      currencyId,
      reportId,
      userId, // from JWT via Passport
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTransactionsHistory = async (req, res) => {
  try {
    // Get userId from Passport
    const userId = req.user.id;

    const transactions = await TransactionsHistory(userId);

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
