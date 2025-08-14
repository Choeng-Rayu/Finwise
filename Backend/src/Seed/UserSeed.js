import sequelize from "../config/database.js";
import User from "../model/users.js";
import setupAssociation from "../model/associatoin.js";

export default async function createUser() {
  const DataUser = [
    {
      firstName: "Not",
      lastName: "John",
      phoneNumber: "0103466789",
      email: "notjonh@gmail.com",
      password: "12345",
    },
    {
      firstName: "Jame",
      lastName: "Sok",
      phoneNumber: "0923456789",
      email: "jamesok@gmail.com",
      password: "12345",
    },
    {
      firstName: "Tom",
      lastName: "My",
      phoneNumber: "0823456789",
      email: "tommy@gmail.com",
      password: "12345",
    },
    {
      firstName: "Run",
      lastName: "Admin",
      phoneNumber: "042346789",
      email: "runadmin@gmail.com",
      password: "12345",
    },
    {
      firstName: "John",
      lastName: "Wick",
      phoneNumber: "0723456789",
      email: "johnwick@gmail.com",
      password: "12345",
    },
  ];
  try {
    await sequelize.authenticate();
    setupAssociation();
    await User.bulkCreate(DataUser);
    console.log("User create successfully");
  } catch (err) {
    console.log("Insert data unsuccessful", err);
  }
}
createUser();
