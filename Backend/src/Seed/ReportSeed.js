import sequelize from "../config/database.js";
import Report from "../model/reports.js";
import setupAssociation from "../model/associatoin.js";

export default async function createReport(params) {
  const DataReport = [
    {
      name: "January Expense Report",
      startDate: "2025-01-01",
      endDate: "2025-01-31",
      filePath: null, // initially no PDF generated
      userId: 1,
    },
    {
      name: "February Expense Report",
      startDate: "2025-02-01",
      endDate: "2025-02-28",
      filePath: null,
      userId: 2,
    },
    {
      name: "March Expense Report",
      startDate: "2025-03-01",
      endDate: "2025-03-31",
      filePath: null,
      userId: 3,
    },
    {
      name: "April Expense Report",
      startDate: "2025-04-01",
      endDate: "2025-04-30",
      filePath: null,
      userId: 4,
    },
    {
      name: "May Expense Report",
      startDate: "2025-05-01",
      endDate: "2025-05-31",
      filePath: null,
      userId: 5,
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await Report.bulkCreate(DataReport);
    console.log("Report create successfully");
  } catch (err) {
    console.log("Insert data unsuccessful", err);
  }
}
createReport();
