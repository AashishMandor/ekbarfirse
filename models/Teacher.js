import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Subject from './Subject.js';


const Teacher = sequelize.define('Teacher', {
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
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

// Sync model with database
sequelize.sync({ alter: true })
  .then(() => {
    console.log('Teacher table created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating Teacher table:', error);
  });

  Teacher.belongsToMany(Subject, { through: 'TeacherSubjects' });
  Subject.belongsToMany(Teacher, { through: 'TeacherSubjects' });
  

export default Teacher;
