import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Class from "./Class.js";

const Teacher = sequelize.define("Teacher", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 255],
    },
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classteacher: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'class not assigned',
  },
});

Class.hasMany(Teacher, { foreignKey: "classId" });
Teacher.belongsTo(Class, { foreignKey: "classId" });




sequelize.sync({ alter: true })
  .then(() => {
    console.log('Teacher model created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Teacher model:', error);
    console.log(error);
});

export default Teacher;
