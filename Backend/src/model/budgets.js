import { data } from "react-router-dom";
import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Budget = sequelize.define("Budget", {
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
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  spentAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.TEXT,
  },
  startDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isAfterStart(value) {
        if (value && this.startDate && value < this.endDate) {
          throw new Error("End date must be after start date");
        }
      },
    },
  },
});
export default Budget;
