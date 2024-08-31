import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Class = sequelize.define("Class", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});




// Sync model with database
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Class model created or updated.");
  })
  .catch(err => {
    console.error("Error creating or updating Class model", err);
    console.log(err);
});

export default Class;
