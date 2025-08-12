import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./users.js";

const Goal = sequelize.define("Goal", {
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
  startDate: {
    type: DataTypes.DATEONLY,
  },
  expectDate: {
    type: DataTypes.DATEONLY,
  },
  completeDate: {
    type: DataTypes.DATEONLY,
  },
  description: {
    type: DataTypes.TEXT,
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
});
export default Goal;
