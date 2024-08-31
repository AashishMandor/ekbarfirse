import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Class from './Class.js';

const Student = sequelize.define('Student', {
  rollNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  StudentName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Classes',
      key: 'id',
    },
  },
});

Student.belongsTo(Class, { foreignKey: 'classId' });
Class.hasMany(Student, { foreignKey: 'classId' });


sequelize.sync({ alter: true })
  .then(() => {
    console.log('Student table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Student table:', error);
  });

export default Student;
