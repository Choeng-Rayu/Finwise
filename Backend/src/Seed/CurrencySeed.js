import sequelize from "../config/database.js";
import Currency from "../model/currencies.js";
import setupAssociation from "../model/associatoin.js";

export default async function createCurrency() {
  const DataCurrency = [
    { name: "US Dollar", symbol: "$" },
    { name: "Cambodian Riel", symbol: "៛" },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await Currency.bulkCreate(DataCurrency);
    console.log("Currency create successfully");
  } catch (err) {
    console.log("Insert data unsuccessful", err);
  }
}
