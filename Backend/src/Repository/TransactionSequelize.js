import Transaction from "../model/transactions.js";
import User from "../model/users.js";

export default async function getuserIdByName(username) {
  try {
    const users = await Transaction.findOne({
      where: {},
    });
  } catch (err) {
    console.log("Error server");
  }
}
