import sequelize from "../config/database.js";
import Category from "../model/categories.js";
import setupAssociation from "../model/associatoin.js";

export default async function createCategory() {
  const DataCategory = [
    {
      name: "Groceries",
      type: "Expense",
      description: "Food and daily essentials",
      budgetId: 1, // linked to January Budget
    },
    {
      name: "Travel",
      type: "Expense",
      description: "Flights, hotels, transportation",
      budgetId: 2, // linked to February Budget
    },
    {
      name: "Savings",
      type: "Income",
      description: "Money set aside for emergency fund",
      budgetId: 3, // linked to March Budget
    },
    {
      name: "Entertainment",
      type: "Expense",
      description: "Movies, concerts, online subscriptions",
      budgetId: 4, // linked to April Budget
    },
    {
      name: "Wedding",
      type: "Expense",
      description: "All wedding related expenses",
      budgetId: 5, // linked to May Budget
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await Category.bulkCreate(DataCategory);
    console.log("Category create successfully");
  } catch (err) {
    console.log("Insert data unsuccessful");
  }
}
