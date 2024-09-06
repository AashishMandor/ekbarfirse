import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Class from "./Class.js";

const Subject = sequelize.define("Subject", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  subjectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  session: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  // date: {
  //   type: DataTypes.DATEONLY,
  //   allowNull: false,
  // },
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: Class,
      key: 'classId',
    },
  },
});

Class.hasMany(Subject, { foreignKey: "classId" });
Subject.belongsTo(Class, { foreignKey: "classId" });



    
sequelize.sync()
.then(()=>{
    console.log("subject model created successfully");
})
.catch(err=>{
    console.log("Error creating subject model",err);
    console.log(err);
})

export { Class, Subject };
export default Subject;