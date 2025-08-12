import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Budget from "./budgets.js";
import Category from "./categories.js";
import Currency from "./currencies.js";
import User from "./users.js";
import Report from "./reports.js";

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
  budgetId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Budget,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  currencyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Currency,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
    onDelete: "CASCADE",
  },
  reportId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Report,
      key: "id",
    },
    onDelete: "CASCADE",
  },
});
export default Transaction;
