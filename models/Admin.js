import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

// Define the Admin model
const Admin = sequelize.define('Admin', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 255],  // Ensure name length is between 1 and 255 characters
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Ensure email is unique
    validate: {
      isEmail: true,  // Validate email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 255],  // Ensure password length is between 6 and 255 characters
    },
  },
}, {
  timestamps: true,
  tableName: 'admins',  // Optional: specify the table name if you want it to be different
});

// Synchronize the model with the database
sequelize.sync({ alter: true })  // Use `alter` to modify existing tables, or `force: true` to recreate tables
  .then(() => {
    console.log('Database tables have been created or updated.');
  })
  .catch((error) => {
    console.error('Error creating or updating database tables:', error);
  });

export default Admin;
