import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import Budget from "./budgets.js";

const Category = sequelize.define("Category", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
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
});
export default Category;
