import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Sattendance = sequelize.define('Sattendance', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
  },
  // studentRollNumber: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   allowNull: false,
  // },
});


sequelize.sync()
  .then(() => {
    console.log('Sattendance table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Teacher table:', error);
  });


export default Sattendance;
