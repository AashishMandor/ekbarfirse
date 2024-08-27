import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

 const Notice = sequelize.define('Notice', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,  // Ensure primaryKey is set
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY, 
    allowNull: true,
  }
}, {
  tableName: 'Notice',  // Explicitly define the table name
  timestamps: true,   // Disable Sequelize's automatic timestamp fields (createdAt, updatedAt) if not needed
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log("Notice model created successfully");
  })
  .catch(err => {
    console.log("Something went wrong in the Notice model");
    console.log(err);
  });

  export default Notice;
