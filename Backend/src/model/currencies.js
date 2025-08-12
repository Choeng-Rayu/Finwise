import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";

const Currency = sequelize.define("Currency", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
  },
});
export default Currency;
