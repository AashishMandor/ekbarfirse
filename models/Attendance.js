import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Attendance = sequelize.define('Attendance', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  date: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
  },
 
  
  
}, {
  timestamps: true,
});



sequelize.sync()  // Sync the model with the database
  .then(() => {
    console.log('Attendance table has been created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Attendance table:', error);
    console.log(error);
  });

export default Attendance;
