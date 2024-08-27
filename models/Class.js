import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Sattendance from './Sattendance.js';
import Subject from "./Subject.js";


 const Class = sequelize.define("Class",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    });




sequelize.sync({alter: true})
.then(() => {
    console.log("class model created");
})
.catch(err => {
    console.error("Error creating class model", err);
});

Class.belongsToMany(Subject, { through: 'ClassSubjects' });
Subject.belongsToMany(Class, { through: 'ClassSubjects' });

Class.hasMany(Sattendance, { foreignKey: 'classId' });
Sattendance.belongsTo(Class, { foreignKey: 'classId' });



export default Class;
