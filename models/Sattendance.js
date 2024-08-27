import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Sattendance = sequelize.define('Sattendance', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
  },
  studentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


sequelize.sync({ alter: true })
  .then(() => {
    console.log('Sattendance table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Teacher table:', error);
  });


export default Sattendance;
