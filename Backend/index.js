import sequelize from "./src/config/database.js";
import setupAssociation from "./src/model/associatoin.js";
import User from "./src/model/users.js";
import Transaction from "./src/model/transactions.js";
import Report from "./src/model/reports.js";
import Goal from "./src/model/goals.js";
import Currency from "./src/model/currencies.js";
import Category from "./src/model/categories.js";
import Budget from "./src/model/budgets.js";

async function testDatabaseConnection() {
  try {
    setupAssociation();
    await sequelize.authenticate();
    console.log("DB test: connection established successfully.");

    // Sync DB schema (be cautious with alter in production)
    await sequelize.sync({ force: true });
    console.log("✅ Synchronized successfully");
  } catch (error) {
    console.error("DB test: unable to connect to the database:", error);
    throw error;
  }
}

// Run and ensure the process exits (0 on success, 1 on failure)
testDatabaseConnection()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));
