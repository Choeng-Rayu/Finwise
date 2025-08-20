import Budget from "../model/budgets.js";
import Category from "../model/categories.js";
import Transaction from "../model/transactions.js";

export async function CreateTransaction(data) {
  return await Transaction.create(data);
}

export async function TransactionsHistory(userId) {
  return await Transaction.findAll({
    attributes: ["name", "amount", "date"], // combine all fields here
    include: [
      {
        model: Category,
        attributes: ["name"],
      },
      {
        model: Budget,
        attributes: ["name"],
      },
    ],
    where: {
      userId: userId,
    },
  });
}
