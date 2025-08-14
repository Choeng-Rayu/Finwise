import sequelize from "../config/database.js";
import Goal from "../model/goals.js";
import setupAssociation from "../model/associatoin.js";

export default async function createGoal() {
  const DataGoal = [
    {
      name: "Save for New Laptop",
      amount: "1200",
      startDate: "2025-01-01",
      expectDate: "2025-06-01",
      completeDate: null,
      description: "Buy a MacBook Pro",
      userId: 1,
    },
    {
      name: "Vacation to Japan",
      amount: "3000",
      startDate: "2025-02-01",
      expectDate: "2025-10-01",
      completeDate: null,
      description: "10-day trip to Tokyo, Kyoto, and Osaka",
      userId: 2,
    },
    {
      name: "Emergency Fund",
      amount: "5000",
      startDate: "2025-01-15",
      expectDate: "2026-01-15",
      completeDate: null,
      description: "6 months of living expenses",
      userId: 3,
    },
    {
      name: "Buy a Motorcycle",
      amount: "1500",
      startDate: "2025-03-01",
      expectDate: "2025-07-01",
      completeDate: "2025-06-15",
      description: "Honda CBR500R",
      userId: 4,
    },
    {
      name: "Wedding Fund",
      amount: "8000",
      startDate: "2025-04-01",
      expectDate: "2026-04-01",
      completeDate: null,
      description: "Save for wedding ceremony and reception",
      userId: 5,
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await Goal.bulkCreate(DataGoal);
    console.log("Goal create successfull");
  } catch (err) {
    console.log("Insert data unsuccessful", err);
  }
}
createGoal();
