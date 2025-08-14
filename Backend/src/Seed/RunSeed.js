import sequelize from "../config/database.js";
import setupAssociation from "../model/associatoin.js";

import createUser from "./UserSeed.js";
import createGoal from "./GoalSeed.js";
import createReport from "./ReportSeed.js";
import createBudget from "./BudgetSeed.js";
import createCategory from "./CategorySeed.js";
import createCurrency from "./CurrencySeed.js";
import createTransaction from "./TransactionSeed.js";

const runSeed = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database successfully");

    setupAssociation(); // call associations once

    // Seed in proper order (users first if FK exists)
    await createUser();
    await createGoal();
    await createReport();
    await createBudget();
    await createCategory();
    await createCurrency();
    await createTransaction();

    console.log("All seeds executed successfully");
    process.exit(0);
  } catch (err) {
    console.error("Seed error", err);
    process.exit(1);
  }
};

runSeed();
