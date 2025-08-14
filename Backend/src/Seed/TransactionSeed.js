import sequelize from "../config/database.js";
import Transaction from "../model/transactions.js";
import setupAssociation from "../model/associatoin.js";

export default async function createTransaction() {
  const DataTransaction = [
    {
      name: "Grocery Shopping",
      amount: "50.00",
      date: "2025-08-01",
      budgetId: 1,
      categoryId: 1,
      currencyId: 1,
      userId: 1,
      reportId: 1,
    },
    {
      name: "Monthly Rent",
      amount: "300.00",
      date: "2025-08-02",
      budgetId: 2,
      categoryId: 2,
      currencyId: 2,
      userId: 2,
      reportId: 2,
    },
    {
      name: "Utility Bill",
      amount: "75.50",
      date: "2025-08-03",
      budgetId: 3,
      categoryId: 3,
      currencyId: 2,
      userId: 3,
      reportId: 3,
    },
    {
      name: "Dinner Out",
      amount: "40.00",
      date: "2025-08-04",
      budgetId: 4,
      categoryId: 4,
      currencyId: 1,
      userId: 4,
      reportId: 4,
    },
    {
      name: "Movie Tickets",
      amount: "20.00",
      date: "2025-08-05",
      budgetId: 5,
      categoryId: 5,
      currencyId: 2,
      userId: 5,
      reportId: 5,
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await Transaction.bulkCreate(DataTransaction);
    console.log("User create successfully");
  } catch (err) {
    console.log("Insert data unsuccessful", err);
  }
}
createTransaction();
