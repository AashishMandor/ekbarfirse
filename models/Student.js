import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Class from './Class.js';

const Student = sequelize.define('Student', {
  rollNumber: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  StudentName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  className: { // Changed from 'class' to 'className' to avoid reserved keyword issues
    type: DataTypes.STRING,
    references: {
      model: 'Classes',
      key: 'name'
    }
  }
}, {
  timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

// Associations
Student.belongsTo(Class, { foreignKey: 'class', targetKey: 'name' });
Class.hasMany(Student, { foreignKey: 'class', sourceKey: 'name' });

// Student.hasMany(Sattendance, { foreignKey: 'studentRollNumber', sourceKey: 'rollNumber' });
// Sattendance.belongsTo(Student, { foreignKey: 'studentRollNumber', targetKey: 'rollNumber' });

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Student table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Student table:', error);
  });

export default Student;
