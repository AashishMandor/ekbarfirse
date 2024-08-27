import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Teacher from './Teacher.js';

const Attendance = sequelize.define('Attendance', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
  },
 
  
  teacherId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Teacher,
      key: 'id',
    },

    onDelete: 'CASCADE',  // If a teacher is deleted, their attendance records will be deleted as well
  },
}, {
  timestamps: true,
});

// Associations
Teacher.hasMany(Attendance, { foreignKey: 'teacherId' });
Attendance.belongsTo(Teacher, { foreignKey: 'teacherId' });

sequelize.sync({ alter: true })  // Sync the model with the database
  .then(() => {
    console.log('Attendance table has been created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Attendance table:', error);
  });

export default Attendance;
