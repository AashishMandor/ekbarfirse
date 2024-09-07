import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Class = sequelize.define("Class", {
  classId: {
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




// Class.hasMany(Student, { foreignKey: 'classId', as: 'Students' }); // Note the alias 'Students'
// Class.hasMany(Subject, { foreignKey: 'classId', as: 'Subjects' });





// Sync model with database
sequelize.sync()
  .then(() => {
    console.log("Class model created or updated.");
  })
  .catch(err => {
    console.error("Error creating or updating Class model", err);
    console.log(err);
});



export default Class;
