import Currency from "./currencies.js";
import Goal from "./goals.js";
import Transaction from "./transactions.js";
import User from "./users.js";
import Report from "./reports.js";
import Category from "./categories.js";
import Budget from "./budgets.js";

export default function setupAssociation() {
  // User has many Goals
  User.hasMany(Goal, { foreignKey: "userId" });
  Goal.belongsTo(User, { foreignKey: "userId" });

  // User generates many Reports
  Report.belongsTo(User, { foreignKey: "userId" });
  User.hasMany(Report, { foreignKey: "userId" });

  // A Report contains many Transactions
  Report.hasMany(Transaction, { foreignKey: "reportId" });
  Transaction.belongsTo(Report, { foreignKey: "reportId" });

  // A Currency has many Transactions
  Currency.hasMany(Transaction, { foreignKey: "currencyId" });
  Transaction.belongsTo(Currency, { foreignKey: "currencyId" });

  // A category has many transaction
  Category.hasMany(Transaction, { foreignKey: "categoryId" });
  Transaction.belongsTo(Category, { foreignKey: "categoryId" });

  // A budget has many transaction
  Budget.hasMany(Transaction, { foreignKey: "budgetId" });
  Transaction.belongsTo(Budget, { foreignKey: "budgetId" });

  //A budget has many category
  Budget.hasMany(Category, { foreignKey: "budgetId" });
  Category.belongsTo(Budget, { foreignKey: "budgetId" });
}
