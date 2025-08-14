import sequelize from "../config/database.js";
import Budget from "../model/budgets.js";
import setupAssociation from "../model/associatoin.js";

export default async function createBudget() {
  const DataBudget = [
    {
      name: "January Budget",
      amount: 1000.0,
      spentAmount: 200.0,
      status: "In Progress",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      userId: 1,
    },
    {
      name: "February Budget",
      amount: 1200.0,
      spentAmount: 500.0,
      status: "In Progress",
      startDate: "2025-02-01",
      endDate: "2025-02-28",
      userId: 2,
    },
    {
      name: "March Budget",
      amount: 1500.0,
      spentAmount: 700.0,
      status: "In Progress",
      startDate: "2025-03-01",
      endDate: "2025-03-31",
      userId: 3,
    },
    {
      name: "April Budget",
      amount: 2000.0,
      spentAmount: 1800.0,
      status: "Almost Finished",
      startDate: "2025-04-01",
      endDate: "2025-04-30",
      userId: 4,
    },
    {
      name: "May Budget",
      amount: 2500.0,
      spentAmount: 2500.0,
      status: "Completed",
      startDate: "2025-05-01",
      endDate: "2025-05-31",
      userId: 5,
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await Budget.bulkCreate(DataBudget);
    console.log("Budget data create successfully");
  } catch (err) {
    console.log("Insert data unsuccessful", err);
  }
}
createBudget();
