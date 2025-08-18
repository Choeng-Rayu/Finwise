import Transaction from "../model/transactions.js";

export async function CreateTransaction(data) {
  return await Transaction.create(data);
}
